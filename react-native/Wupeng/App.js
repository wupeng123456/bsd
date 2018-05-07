import { StackNavigator } from "react-navigation";
import MainPage from './app/mainPage';
import DetailPagDe from './app/detailPage'


const App = StackNavigator({
    Home: {
        screen: MainPage,
    },
    // Detail: {
    //     screen: DetailPagDe,
    // },
});
module.exports = MainPage;