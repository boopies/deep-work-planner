import React from 'react';

export default class NoPage extends React.Component{
render(){
    return(
        <>
        <header>
            <h1>Page Not Found</h1>
        </header>
        <main>
            <section>
                <p>Please go back and try again.</p>
            </section>
        </main>
        </>
    )
};

}