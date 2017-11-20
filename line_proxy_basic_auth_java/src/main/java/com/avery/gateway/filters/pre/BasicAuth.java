package com.avery.gateway.filters.pre;

import javax.servlet.http.HttpServletRequest;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.ZuulFilter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.lang.String;
import java.util.Base64;

public class BasicAuth extends ZuulFilter {
    private static String encoding = Base64.getEncoder().encodeToString(("admin:supersecret").getBytes());
    private static String authValue = "Basic " + encoding;
    private static Logger log = LoggerFactory.getLogger(BasicAuth.class);

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 1;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() {
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest request = ctx.getRequest();

        // Basic authentication
        String requestAuthValue = request.getHeader("Authorization" );
        if ( requestAuthValue.equals(authValue) ) {
            log.info( "Authenticated." );
            log.info(String.format("%s request to %s", request.getMethod(), request.getRequestURL().toString()));

            return null;
        } else {
            log.info( "Access denied: wrong user name or password." );
            ctx.setSendZuulResponse( false );
            ctx.setResponseStatusCode( 401 );

            return null;
        }

    }
}
