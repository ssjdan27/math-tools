import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../home/HomePage'
import { AppLayout } from '../layout/AppLayout'
import { CantorToolPage } from '../../tools/cantor/ToolPage'
import { ComplexToolPage } from '../../tools/complex/ToolPage'
import { BarycentricToolPage } from '../../tools/barycentric/ToolPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<CantorToolPage />} path="cantor" />
          <Route element={<ComplexToolPage />} path="complex" />
          <Route element={<BarycentricToolPage />} path="barycentric" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
