import API from './api'

export function getAllCategories() {
    return API.get(`/api/get/categories/10/2`,
        {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im93bmFnZSIsInBhc3N3b3JkIjoic2VjcmV0In0.ezlOpqFzxsqDMHKrlY-ET4cCJ8IWg9hRKq2g1Zw7z_M'
            }
        });
}

export function getCategoryPrank(slug) {
    return API.get(`/api/get/category/pranks/slug/${slug}`,
        {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im93bmFnZSIsInBhc3N3b3JkIjoic2VjcmV0In0.ezlOpqFzxsqDMHKrlY-ET4cCJ8IWg9hRKq2g1Zw7z_M'
            }
        });
}