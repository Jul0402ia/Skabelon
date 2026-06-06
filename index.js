const { createApp } = Vue;

createApp({

    data() {
        return {
            error: null,
            shampoos: [],
            baseUrl: "https://localhost:7267/api/"
            }

    },

    mounted() {
        this.getShampoos();
    },

    methods: {
        async getShampoos() {
            try {
               const response = await axios.get(this.baseUrl + "Shampoo")
               this.shampoos = response.data
               console.log(this.shampoos)
            }
            catch (error) {
                this.error = error;
                console.log("penis")
            }

        }

        

    }           

}).mount("#app");