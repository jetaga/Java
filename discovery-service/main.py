from fastapi import FastAPI, Header, Query
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# This allows your React frontend to communicate with this Python API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

JAVA_SERVICE_URL = "http://localhost:9090/api/v1/commerce/products"

@app.get("/discovery/search")
def search_products(q: str = Query(None), x_tenant_id: str = Header(None)):
    # If the user selects 'global', we don't send a tenant header to Java
    headers = {}
    if x_tenant_id and x_tenant_id != "global":
        headers = {"X-Tenant-ID": x_tenant_id}
    
    try:
        response = requests.get(JAVA_SERVICE_URL, headers=headers)
        products = response.json()
        
        # Filter by keyword if search 'q' is provided
        if q:
            products = [p for p in products if q.lower() in p['name'].lower()]
            
        return {"results": products, "count": len(products)}
    except Exception as e:
        return {"error": "Java service is not running", "details": str(e)}

@app.get("/discovery/global-market")
def global_market():
    # Hits Java without a tenant header to get ALL products from all tenants
    try:
        response = requests.get(JAVA_SERVICE_URL)
        return {"results": response.json()}
    except Exception as e:
        return {"error": "Java service is not running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
