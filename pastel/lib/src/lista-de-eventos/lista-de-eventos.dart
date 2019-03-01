import 'package:flutter/material.dart';

class ListadeEventosPage extends StatefulWidget {
  @override
  _ListadeEventosPagePageState createState() => new _ListadeEventosPagePageState();
}

class _ListadeEventosPagePageState extends State<ListadeEventosPage> {
  @override
  Widget build (BuildContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Lista de Eventos'),
      ),
    );
  }
}