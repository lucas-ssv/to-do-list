import { useState, useMemo } from 'react'
import { Image, TextInput, TouchableOpacity, View, Text, FlatList } from "react-native"
import { AntDesign, Feather } from '@expo/vector-icons'
import { styles } from './home-styles'
import { CheckBox } from "../../components/checkbox/checkbox"

type Task = {
  id: string
  description: string
  isChecked: boolean
}

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskValue, setTaskValue] = useState('')
  const tasksSize = useMemo(() => tasks.length, [tasks])
  const tasksCompleted = useMemo(() => {
    return tasks.filter(task => task.isChecked).length
  }, [tasks])

  const handleClickCheckBox = (id: string): void => {
    const tasksList = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isChecked: !task.isChecked }
      }
      return { ...task }
    })
    setTasks(tasksList)
  }

  const handleAddNewTask = (): void => {
    setTasks(prevState => [...prevState, {
      id: Math.random().toString(),
      description: taskValue,
      isChecked: false
    }])
    setTaskValue('')
  }

  const handleRemoveTask = (id: string): void => {
    const tasksList = tasks.filter(task => !task.id.includes(id))
    setTasks(tasksList)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="Adicione uma nova tarefa" 
            placeholderTextColor="#808080" 
            onChangeText={(value) => setTaskValue(value)} 
            value={taskValue}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
            <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.infoTask}>
            <Text style={styles.createdText}>Criadas</Text>
            <View style={styles.amountTasksContainer}>
              <Text style={styles.amountTasks}>{tasksSize}</Text>
            </View>
          </View>
          <View style={styles.infoTask}>
            <Text style={styles.completedText}>Concluídas</Text>
            <View style={styles.amountTasksContainer}>
              <Text style={styles.amountTasks}>{tasksCompleted}</Text>
            </View>
          </View>
        </View>
        <View style={styles.taskContainer}>
          <FlatList 
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.taskContent}>
                <CheckBox checked={item.isChecked} onCheck={() => handleClickCheckBox(item.id)} />
                <Text style={[styles.taskDescription, item.isChecked && styles.completedTask]}>{item.description}</Text>
                <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
                  <Feather name="trash-2" size={14} color="#808080" />
                </TouchableOpacity>
              </View>
            )}
            ListEmptyComponent={() => (
              <View style={styles.tasksListEmptyContainer}>
                <Feather name="clipboard" size={56} color="#333333" />
                <Text style={styles.tasksListTitle}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.tasksListSubTitle}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}