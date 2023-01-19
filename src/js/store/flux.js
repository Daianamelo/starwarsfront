const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            // // function sacarInfoPersonajes() {
            // // 	fetch("https://www.swapi.tech/api/people")
            // // 	.then(res => res.json())
            // // 	// .then(data => data.setPersonajes(data.results))
            // // 	// .then(data =>console.log(data.results)) //me trae el array
            // // 	.then(data =>setPersonajes(data.results))//me setea el array
            // // 	.catch(err =>console.error(err))

            // }


            sacarInfoPersonajes: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/people")
                    .then(res => res.json())
                    .then(data => console.log(data.results)) //me trae el array
                    .then(data => setStore({
                        personajes: data.results
                    })) //me setea el array
                    .catch(err => console.error(err))

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
};

export default getState;