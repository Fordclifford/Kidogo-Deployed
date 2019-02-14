export const styles = {
  container: {
    flex: 1,
    padding: 5
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'white',
    opacity: 0.5,
    margin: 10,
    fontSize: 18,
    color: 'white',
    paddingLeft: 10
  },
  label: {
    fontSize: 14,
    opacity: 0.5,
    color: 'white',
    marginLeft: 20,
    marginBottom: 10
  },
  passwordHolder: {
    flexDirection: 'row',
  },
  showButton: {
    borderBottomWidth: 2,
    borderColor: 'white',
    opacity: 0.5,
    marginVertical: 10,
    marginRight: 10,
    flex: 0.1
  },
  nameHolder: {
    flexDirection: 'row'
  },
  focused: {
    opacity: 1,
    fontSize: 18
  },
  next: {
    flexDireciton: 'row',
    marginRight: 10,
    marginTop: 20,
    opacity: 0.5,
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    width: 250,

  },
  nextText: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
    textAlign: 'right',
    height: 50,
    lineHeight: 50,
  },
  notReady: {
    opacity: 0.5
  },
  ready: {
    opacity: 1
  },
  imageHolder: {
    // backgroundColor:'#D1F1FC',
    height: 220,
    width: 220,
    borderRadius: 110,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  error: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 175,
    height: 75,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#11011B',
    opacity: 0.5
  },
  errorText: {
    color: "white",
    fontSize: 18
  },
  prefix: {
    flex:.2, 
    fontSize:18, 
    fontWeight:'bold', 
    borderBottomWidth:2, 
    opacity:0.5, 
    borderColor:'white', 
    color:'white',
    height:30,
    marginVertical: 10,
    marginLeft:10,
    paddingLeft:10,
    lineHeight:34
  }
}