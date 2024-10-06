import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { BookingProvider } from '~/contexts/BookingContext'

export default function MainLayout() {
  return (
    <div>
      <BookingProvider>
        <Header />
        <Outlet />
        <Footer />
      </BookingProvider>
    </div>
  )
}