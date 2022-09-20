import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  },
  header: {
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    paddingHorizontal: 24
  },
  form: {
    flexDirection: 'row',
    position: 'relative',
    bottom: 27
  },
  input: {
    height: 54,
    flex: 1,
    fontSize: 16,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    borderRadius: 6,
    padding: 16,
    marginRight: 4
  },
  button: {
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6
  },
  textButton: {
    color: '#F2F2F2',
    fontSize: 16
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoTask: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  createdText: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold'
  },
  completedText: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold'
  },
  amountTasksContainer: {
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
    borderRadius: 16
  },
  amountTasks: {
    color: '#D9D9D9',
    fontWeight: 'bold'
  },
  taskContainer: {
    flex: 1,
    marginVertical: 20
  },
  taskContent: {
    flex: 1,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 8
  },
  taskDescription: {
    flex: 1,
    fontSize: 14,
    color: '#F2F2F2',
    lineHeight: 24,
    marginHorizontal: 12
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#808080'
  },
  tasksListEmptyContainer: {
    alignItems: 'center',
    paddingTop: 48,
    borderTopWidth: 1,
    borderTopColor: '#333333'
  },
  tasksListTitle: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 16
  },
  tasksListSubTitle: {
    color: '#808080',
  }
})