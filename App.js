import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  TextInput,
  ScrollView,
  Touchable,
  Alert,
  Platform
} from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { theme } from './color';

const STORAGE_KEY = "@toDos";


export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  useEffect(() => {
    loadToDos();
  }, []);

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);

  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s !== null) {
      setToDos(JSON.parse(s));
    }
  };

  

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = {
      ...toDos, 
      [Date.now()]: { text, working },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = async (key) => {
    if(Platform.OS === "web"){
      const ok = confirm("ToDo를 삭제하시겠습니까?")
      if(ok){
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        saveToDos(newToDos);
      }
    } else {
      Alert.alert("ToDo를 삭제하시겠습니까?","확실하십니까?", [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제",
          style:"destructive",
          onPress: () => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            setToDos(newToDos);
            saveToDos(newToDos);
          }
        }
      ]);
    } 
  };


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{ fontSize: 45,fontWeight: "600", color: working ? "white" : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{ fontSize: 45,fontWeight: "600",color: !working ? "white" : theme.grey }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          value={text}
          autoCorrect
          returnKeyType='done'
          placeholder={working ? "할 일을 추가하세요" : "어디에 가고 싶으신가요?"}
          style={styles.input}
        />
      </View>
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Fontisto name="trash" size={20} color="white" />
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 60,
  },
  btnText: {
    
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
    paddingLeft: 20,
  },
  toDo: {
    backgroundColor: theme.toDobg,
    marginBottom: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
