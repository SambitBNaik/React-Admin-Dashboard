import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import UserPage from "./pages/UserPage";
import { Route, Routes} from 'react-router-dom';
import ProductsPage from "./pages/ProductsPage";
import SalesPage from "./pages/SalesPage";
import OrderPage from "./pages/OrderPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {


  return (
   <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
    {/* BG */}
    <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

    <Sidebar/>
    <Routes>
      <Route path="/" element={<OverviewPage />}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/users" element={<UserPage/>}/>
      <Route path="/sales" element={<SalesPage/>}/>
      <Route path="/orders" element={<OrderPage/>}/>
      <Route path="/analytics" element={<AnalyticsPage/>}/>
      <Route path="/settings" element={<SettingsPage/>}/>
    </Routes>
   </div>
  )
}

export default App