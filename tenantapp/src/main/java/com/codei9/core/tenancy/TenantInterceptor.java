package com.codei9.core.tenancy;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class TenantInterceptor implements HandlerInterceptor {
    private static final String TENANT_HEADER = "X-Tenant-ID";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String tenantId = request.getHeader(TENANT_HEADER);
        
        // If a tenantId is provided, set it. 
        // If NOT (Global View), we allow it to be null/empty.
        if (tenantId != null && !tenantId.isEmpty()) {
            TenantContext.setCurrentTenant(tenantId);
        } else {
            TenantContext.clear();
        }
        
        return true; 
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        TenantContext.clear();
    }
}
