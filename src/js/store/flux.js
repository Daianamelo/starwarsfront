const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            personaje: {},
            favoritos: [],
            planeta: {},
            planetas: [],
            vehiculo: {},
            vehiculos: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            sacarInfoPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results
                    }))
                    .catch(err => console.error(err))

            },

            sacarInfoVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles/4")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehiculos: data.results
                    }))
                    .catch(err => console.error(err))

            },


            sacarInfoPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results
                    }))
                    .catch(err => console.error(err))

            },

            agregarFavoritos: (name) => {
                const store = getStore();
                setStore({
                    favoritos: [...store.favoritos, name]
                });
            },



            detalleVehiculo: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        vehiculo: data.result
                    }))
                    .catch(err => console.error(err))
            },

            detallePlaneta: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        planeta: data.result
                    }))
                    .catch(err => console.error(err))
            },

            detallesPersonaje: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        personaje: data.result
                    }))
                    .catch(err => console.error(err))
            },

        },
        changeColor: (index, color) => {
            //get the store
            const store = getStore();

            //we have to loop the entire demo array to look for the respective index
            //and change its color
            const demo = store.demo.map((elm, i) => {
                if (i === index) elm.background = color;
                return elm;
            });

            //reset the global store
            setStore({
                demo: demo
            });
        }
    }
};


export default getState;