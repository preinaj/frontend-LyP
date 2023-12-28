

class OrdersApi {

    static API_BASE_URL = "/api/v1";

    static requestHeaders() {
        return {}
    }

    static async getOrders() {
        const headers = this.requestHeaders();
        const request = new Request(OrdersApi.API_BASE_URL + "/orders", {
            method: 'GET',
            headers: headers
        });

        const response = await fetch(request);

        if (!response.ok) {
            throw new Error("Error fetching orders from API", response.status);
        }

        return response.json();
    }

}

export default OrdersApi;