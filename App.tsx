import { StatusBar } from 'react-native';
import { Home } from './src/pages/home/home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
    </>
  )
}
