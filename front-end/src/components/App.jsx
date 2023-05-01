import React from 'react';
import Header from './Header';
import NovoUsuario from './NovoUsuario';
import Toast from './Toast';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NovoUsuario
                    error={msg => this.refs.toast.error(msg)}    
                />
                <Toast ref="toast" />
            </div>
        );
    }
}

export default App;