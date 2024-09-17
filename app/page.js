// pages/index.js (ou app/page.js para Next.js 13+)
import Image from 'next/image';
import styles from './page.module.css'; // Ou ajuste conforme necessário

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logoSpace}>
          <Image
            src="/img/logo.png" // Caminho relativo à pasta public
            alt="Logo"
            height={60}
            width={150}
            priority
          />
        </div>
        <nav>
          <ul className={styles.navButtons}>
            <li><a href="#home">Home</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#registro">Registro</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>Bem-vindo à Página Inicial</h1>
        <ol>
          <li>
            Comece editando <code>app/page.js</code>.
          </li>
          <li>Salve e veja suas mudanças instantaneamente.</li>
        </ol>
      </main>

      <footer className={styles.footer}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi aliquet dolor, vel blandit est eros vitae libero. Integer gravida, elit nec interdum tincidunt, lacus ligula pretium magna, id sagittis odio mi non est.
        </p>
      </footer>

      {/* Adicione a imagem fixa diretamente aqui */}
      <div style={{
        position: 'fixed',
        top: '20px', // Ajuste conforme necessário
        right: '20px', // Ajuste conforme necessário
        width: '200px', // Ajuste conforme necessário
        height: 'auto', // Mantém a proporção da imagem
        zIndex: 10, // Garante que a imagem fique acima de outros elementos
      }}>
        <Image
          src="/img/logo.png" // Caminho relativo à pasta public
          alt="Imagem Fixa"
          width={200} // Ajuste conforme necessário
          height={100} // Ajuste conforme necessário
          priority
        />
      </div>
    </div>
  );
}
