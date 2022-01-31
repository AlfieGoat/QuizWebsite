import styles from './Layout.module.scss'

interface LayoutProps {
    children: React.ReactNode;
 }

export const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>{children}</div>
  )
}

