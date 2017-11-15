package com.avery.gateway.filters.pre;

import javax.servlet.http.HttpServletRequest;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.ZuulFilter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.lang.String;

public class ReplaceAuthHeader extends ZuulFilter {
    private static String channelAccessToken = "Bearer dUTTYfRFgYxo6+iqBOadmbznOpDgHD9AX6H66inHLW/s8TBQSiOxUuWOXrpKNAYDQUdk7e2D26PQMwTpNHPKd2YAWXt1Dv4ofNnlK0XF0HbEk6a3cpsQvIQopAZfrkeu+Yl5FAUQvqEDTMf67ioRcgdB04t89/1O/w1cDnyilFU=";
    private static Logger log = LoggerFactory.getLogger(ReplaceAuthHeader.class);

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 2;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() {
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest request = ctx.getRequest();

        // Replace authentication header
        String requestMethod = request.getMethod();
        String requestUrl = request.getRequestURI();
        log.info("Method: " + requestMethod + " URL: " + requestUrl);

        if ( requestMethod.equals( "GET" ) ) {
            if ( requestUrl.startsWith( "/v2/bot/profile/" ) ) {
                ctx.addZuulRequestHeader("Authorization", channelAccessToken );
            }
        }

        return null;
    }
}