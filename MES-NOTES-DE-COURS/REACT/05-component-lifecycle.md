
# <span style="color: #26B260">**Component lifecycle.**</span>

[Sommaire](./00-Sommaire.md)

Le cycle de vie d'un composant.

```javascript
// Montage
class Compteur extends React.Component {
    
    contructor(props) {
        //super execute le constructeur parent
        super(props);
        console.log('1');
        this.state = {ok: '1'};
    }
    static getDerivedStateFromProps(state) {
        console.log('2');
        return state;
    }
    
    
    render() {
        console.log('3');
        return <div>
            <h1>Compteur : <span>{this.props.name}</span></h1>
            <p>{this.props.children}</p>
        </div>
    }

    componentDidMount() {
        console.log('4');
    }
    
    // mise à jour
    componentDidUpdate() {
        console.log('5');
    }
    
    // Démontage.
    componentWillUnmount() {
        console.log('6');
    }
    
}

```

Documentation.
https://fr.reactjs.org/docs/react-component.html