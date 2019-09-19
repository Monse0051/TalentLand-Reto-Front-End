import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

export default class CardExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        urlToImage: "" ,
        subtitle: "",
        title:"",
        content: ""
      };

      this.getRandomNew = this.getRandomNew.bind(this);
    }
    componentDidMount(){
      this.getRandomNew()
    }
    getRandomNew(){

    fetch("https://talenland-reto-back-end.herokuapp.com")
      .then((response)=>{
        return response.json();
      })
      .then(data=>{
        console.log(data);
        this.setState(data);
      })
      .catch(err=>{
        console.log(err);
      });

  }

  
  render() {

    return (
      <IonApp>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>
              News
        </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <img src= {this.state.urlToImage} alt="imagen" />
            <IonCardHeader>
              <IonCardSubtitle>{this.state.subtitle}</IonCardSubtitle>
              <IonCardTitle>{this.state.title}</IonCardTitle>
              <IonCardContent >
                {this.state.content}
          </IonCardContent>
            </IonCardHeader>
          </IonCard>
          <IonButton onClick={this.getRandomNew}>Next</IonButton>
        </IonContent>
      </IonApp>
    );
  }


}