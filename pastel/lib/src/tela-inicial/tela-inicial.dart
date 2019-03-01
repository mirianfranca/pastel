import 'package:flutter/material.dart';
//Pages
import 'package:pastel/src/lista-de-eventos/lista-de-eventos.dart';
void main() => runApp(Pastel());

class Pastel extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blueGrey,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);


  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {


  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text('Tela Inicial'),
        // ignore: argument_type_not_assignable
        backgroundColor: Colors.blueGrey,
        actions: <Widget>[
          IconButton (
            icon: Icon(Icons.search), onPressed: (){},)
        ],
      ),
      drawer: Drawer(
        child: new ListView(
          children: <Widget>[
            new UserAccountsDrawerHeader(
                accountName: new Text('Nome do usuário'),
                accountEmail: new Text('Email do usuario'),
            ),
            new ListTile(
              title: new Text('Lista de eventos'),
              onTap: () {
                Navigator.push(context, new MaterialPageRoute(builder: (BuildContext context) => new ListadeEventosPage ()));
              },
            ),
          ],
        ),
      ),
      body: Center(

        child: Column(

          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
          ],
        ),
      ),
    );
  }
}