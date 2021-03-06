import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';

import React, {Component} from 'react';
import Login from './Login';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';
///navigation///////////

export default class ListDerang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{id: '',
      titre: 'complaint1320',
      dateSigna: '2020-11-01T00:00:00.000Z',
      dateLimit: '2020-11-01T00:00:00.000Z',
      nomClient: 'Saidi alae',
      numClient: '0549000879',
      addressClient: 'Babez',
      constitutionTete: 'H05',
      constitutionGroupe: 6,
      constitutionAmorce: 7,
      nomMsan: 'MSN4',
      pair: 15,
      typeDerang: 'pas de tonalité',
      numFixClient: '02367564',
      lic: 45,
      referenceEqui: 46487909,
      nomTech: 'C7_BEZ',
      nbVisite: 0,
      compte: '',
      visible: false,},
      {id: '',
      titre: 'complaint12560',
      dateSigna: '2020-11-01T00:00:00.000Z',
      dateLimit: '2020-11-01T00:00:00.000Z',
      nomClient: 'Saidi alae',
      numClient: '0549000879',
      addressClient: 'Babez',
      constitutionTete: 'H05',
      constitutionGroupe: 6,
      constitutionAmorce: 7,
      nomMsan: 'MSN4',
      pair: 15,
      typeDerang: 'pas de tonalité',
      numFixClient: '02367564',
      lic: 45,
      referenceEqui: 46487909,
      nomTech: 'C7_BEZ',
      nbVisite: 0,
      compte: '',
      visible: false,},
      {id: '',
      titre: 'complaint2365720',
      dateSigna: '2020-11-01T00:00:00.000Z',
      dateLimit: '2020-11-01T00:00:00.000Z',
      nomClient: 'Saidi alae',
      numClient: '0549000879',
      addressClient: 'Babez',
      constitutionTete: 'H05',
      constitutionGroupe: 6,
      constitutionAmorce: 7,
      nomMsan: 'MSN4',
      pair: 15,
      typeDerang: 'pas de tonalité',
      numFixClient: '02367564',
      lic: 45,
      referenceEqui: 46487909,
      nomTech: 'C7_BEZ',
      nbVisite: 0,
      compte: '',
      visible: false,},
      {id: '',
      titre: 'complaint29740',
      dateSigna: '2020-11-01T00:00:00.000Z',
      dateLimit: '2020-11-01T00:00:00.000Z',
      nomClient: 'Saidi alae',
      numClient: '0549000879',
      addressClient: 'Babez',
      constitutionTete: 'H05',
      constitutionGroupe: 6,
      constitutionAmorce: 7,
      nomMsan: 'MSN4',
      pair: 15,
      typeDerang: 'pas de tonalité',
      numFixClient: '02367564',
      lic: 45,
      referenceEqui: 46487909,
      nomTech: 'C7_BEZ',
      nbVisite: 0,
      compte: '',
      visible: false,},
      {id: '',
      titre: 'complaint1654',
      dateSigna: '2020-11-01T00:00:00.000Z',
      dateLimit: '2020-11-01T00:00:00.000Z',
      nomClient: 'Saidi alae',
      numClient: '0549000879',
      addressClient: 'Babez',
      constitutionTete: 'H05',
      constitutionGroupe: 6,
      constitutionAmorce: 7,
      nomMsan: 'MSN4',
      pair: 15,
      typeDerang: 'pas de tonalité',
      numFixClient: '02367564',
      lic: 45,
      referenceEqui: 46487909,
      nomTech: 'C7_BEZ',
      nbVisite: 0,
      compte: '',
      visible: false,},
      {id: '',
      titre: 'complaint132000',
      dateSigna: '2020-11-01T00:00:00.000Z',
      dateLimit: '2020-11-01T00:00:00.000Z',
      nomClient: 'Saidi alae',
      numClient: '0549000879',
      addressClient: 'Babez',
      constitutionTete: 'H05',
      constitutionGroupe: 6,
      constitutionAmorce: 7,
      nomMsan: 'MSN4',
      pair: 15,
      typeDerang: 'pas de tonalité',
      numFixClient: '02367564',
      lic: 45,
      referenceEqui: 46487909,
      nomTech: 'C7_BEZ',
      nbVisite: 0,
      compte: '',
      visible: false,},
      {id: '',
      titre: 'complaint115450',
      dateSigna: '2020-11-01T00:00:00.000Z',
      dateLimit: '2020-11-01T00:00:00.000Z',
      nomClient: 'Saidi alae',
      numClient: '0549000879',
      addressClient: 'Babez',
      constitutionTete: 'H05',
      constitutionGroupe: 6,
      constitutionAmorce: 7,
      nomMsan: 'MSN4',
      pair: 15,
      typeDerang: 'pas de tonalité',
      numFixClient: '02367564',
      lic: 45,
      referenceEqui: 46487909,
      nomTech: 'C7_BEZ',
      nbVisite: 0,
      compte: '',
      visible: false,},
      {id: '',
      titre: 'complaint154680',
      dateSigna: '2020-11-01T00:00:00.000Z',
      dateLimit: '2020-11-01T00:00:00.000Z',
      nomClient: 'Saidi alae',
      numClient: '0549000879',
      addressClient: 'Babez',
      constitutionTete: 'H05',
      constitutionGroupe: 6,
      constitutionAmorce: 7,
      nomMsan: 'MSN4',
      pair: 15,
      typeDerang: 'pas de tonalité',
      numFixClient: '02367564',
      lic: 45,
      referenceEqui: 46487909,
      nomTech: 'C7_BEZ',
      nbVisite: 0,
      compte: '',
      visible: false,}
    ],
    };
  }
  ///les fonctions//////////////////////////////

  //affiche le titre et la date
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.listStyle}
        onPress={() =>
          this.props.history.push('/InfoDerang', {
            compte: "C7_BEZ",//this.props.location.state.compte,
            titre: item.titre,
          })
        }>
        <View>
          <Text style={styles.titreStyle}>{item.titre}</Text>
          <Text style={styles.dateStyle}>{item.dateLimit}</Text>
        </View>
        <Image source={require('../assets/next.png')} style={styles.img} />
      </TouchableOpacity>
    );
  };
  ////////////////////////////////////
  ///fonction pour separer les dérangements
  renderSeparator = () => {
    return <View style={styles.separatorStyle}></View>;
  };
  ////////////////////////////
  renderFooter = () => {
    return <View style={styles.footer}></View>;
  };
  ////////////////////////////////////
  renderSeparatorDrawer() {
    return <View style={styles.separatorDrawerStyle}></View>;
  }
  ////////// *///////////////////////////////
  //link to  pages in the menu
  renderPage = ({item}) => {
    if (item.key == 'Acceuil') {
      this.props.history.push('/ListDerang/' + this.state.compte);
    }
  };
  //////////////////////////////////
  renderDrawer() {
    //slideMenu
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <FlatList
          style={styles.menu}
          style={{flex: 1}}
          data={[
            {key: 'Ajouter PC', icon: 'plus-square'},
            {key: 'Connaître état PC', icon: 'desktop'},
            {key: 'Changer état pair', icon: 'undo'},
            {key: 'Dérangements urgents', icon: 'bell'},
            {key: 'Déconnecter', icon: 'sign-out'},
          ]}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.menuStyle}
              onPress={() => {
                if (item.key === 'Connaître état PC') {
                  this.props.history.push('/EtatPc', {
                    compte: "C7_BEZ" // this.props.location.state.compte,
                  });
                } else {
                  if (item.key === 'Ajouter PC') {
                    this.props.history.push('/AjouterPc', {
                      compte: "C7_BEZ"//this.props.location.state.compte,
                    });
                  } else {
                    if (item.key === 'Changer état pair') {
                      this.props.history.push('/ChangerEtatPair', {
                        compte: "C7_BEZ",//this.props.location.state.compte,
                        etatPair: true,
                      });
                    } else {
                      if (item.key === 'Dérangements urgents') {
                        this.props.history.push('/DerangUrgent', {
                          compte: "C7_BEZ"//this.props.location.state.compte,
                        });
                      } else {
                        if (item.key === 'Déconnecter') {
                          this.props.history.push('/');
                        }
                      }
                    }
                  }
                }
              }}>
              <Icon name={item.icon} color="white" size={20} />
              <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparatorDrawer}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
  //////////////////////////////////
  openDrawer() {
    this.drawer.open();
  }
  ////////////////////////////////
  closeDrawer() {
    this.drawer.close();
  }
  /////////////////////////////////
  // // componentDidMount() {
  // //   fetch(
  // //     'http://172.20.10.11:5000/derangement/afficherAttente/mobile/' +
  // //       this.props.location.state.compte,
  // //   )
  // //     .then((response) => response.json())
  // //     .then((responseData) => {
  // //       this.setState((prevState) => ({
  // //         dataSource: responseData,
  // //       }));
  // //       /* console.log('in data source');
  // //       console.log(this.state.dataSource.titre); */
  // //     })
  // //     .catch((error) => {
  // //       console.log(error);
  // //     });
  // // }
  ///////////////////////

  //////************************************ */
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <Drawer
            ref={(ref) => (this.drawer = ref)}
            content={this.renderDrawer()}
            tapToClose={true}
            openDrawerOffset={0.35}
            styles={drawerStyles}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.openDrawer.bind(this)}>
                <Icon name="bars" color="white" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.derangStyle}></View>
            <FlatList
              data={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.renderSeparator}
              ListFooterComponent={this.renderFooter}
            />
          </Drawer>
        </SafeAreaView>
      </View>
    );
  }
}

/////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  derangStyle: {
    height: '5%',
  },
  header: {
    backgroundColor: '#27B8B8',
    elevation: 12,
    height: '10%',
    padding: '5%',
  },
  space: {
    height: '50%',
    backgroundColor: '#27B8B8',
  },
  item: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
    height: 44,
    color: '#FFFFFF',
  },
  menuStyle: {
    flex: 1,
    alignItems: 'center',
    left: '15%',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#27B8B8',
  },
  listStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
    marginLeft: '10%',
  },
  img: {
    marginTop: '4%',
    width: 20,
    height: 30,
    marginLeft: '20%',
  },

  titreStyle: {
    marginTop: 7,
    fontSize: 16,
  },
  dateStyle: {
    fontSize: 14,
    color: '#A79E9E',
  },
  separatorStyle: {
    height: 10,
  },
  separatorDrawerStyle: {
    height: 0.5,
    backgroundColor: '#2AC9BF',
  },
  footer: {
    width: '100%',
    height: 45,
  },
});
const drawerStyles = {
  drawer: {
    flex: 1,
    backgroundColor: '#27B8B8',
    /* shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3, */
  },
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
};
