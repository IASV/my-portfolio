<script setup lang="ts">
import { 
  IconMail, 
  IconBrandLinkedin, 
  IconBrandGithub,
  IconBrandTiktok,
  IconBrandYoutube,
  IconMapPin,
  IconPhone
} from '@tabler/icons-vue';
</script>

<template>
  <div class="container" id="contact">
    <div class="content">
      <h1>Contacto</h1>
      <p class="subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
      
      <div class="contact-grid">
        <div class="contact-card">
          <div class="icon-wrapper">
            <IconMail :size="32" stroke-width="1.5" />
          </div>
          <h3>Email</h3>
          <a href="mailto:ivanantoniosuarezvillalba@gmail.com">
            ivanantoniosuarezvillalba@gmail.com
          </a>
        </div>

        <div class="contact-card">
          <div class="icon-wrapper">
            <IconPhone :size="32" stroke-width="1.5" />
          </div>
          <h3>Teléfono</h3>
          <a href="tel:+573186413246">
            +57 318 641 3246
          </a>
        </div>

        <div class="contact-card">
          <div class="icon-wrapper">
            <IconMapPin :size="32" stroke-width="1.5" />
          </div>
          <h3>Ubicación</h3>
          <span>Aguachica, Cesar, Colombia</span>
        </div>
      </div>

      <div class="social-links">
        <h2>Sígueme en mis redes</h2>
        <div class="socials">
          <a href="https://www.linkedin.com/in/iasuarez/" target="_blank" class="social-button">
            <IconBrandLinkedin :size="28" stroke-width="1.5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/IASV" target="_blank" class="social-button">
            <IconBrandGithub :size="28" stroke-width="1.5" />
            <span>GitHub</span>
          </a>
          <a href="https://www.tiktok.com/@ia.suarez" target="_blank" class="social-button">
            <IconBrandTiktok :size="28" stroke-width="1.5" />
            <span>TikTok</span>
          </a>
          <a href="https://www.youtube.com/@ia.suarez" target="_blank" class="social-button">
            <IconBrandYoutube :size="28" stroke-width="1.5" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--theme-color-dark);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
}

.content h1 {
  color: var(--theme-color-white);
  font-family: Nunito;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
}

.subtitle {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: -30px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 900px;
}

.contact-card {
  background-color: var(--theme-color-dark-blue);
  border: 5px solid var(--theme-color-dark);
  border-radius: 15px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition-duration: 0.3s;
  cursor: pointer;
  user-select: none;
}

.contact-card:hover {
  border-color: var(--theme-color-blue);
  transform: scale(1.05);
}

.icon-wrapper {
  color: var(--theme-color-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: var(--theme-color-dark);
  border-radius: 50%;
}

.contact-card h3 {
  color: var(--theme-color-white);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
}

.contact-card a {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-card a:hover {
  color: var(--theme-color-blue);
}

.contact-card span {
  color: var(--theme-color-gray);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
}

.social-links h2 {
  color: var(--theme-color-white);
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
}

.socials {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.social-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background-color: var(--theme-color-dark-blue);
  border: 3px solid var(--theme-color-dark);
  border-radius: 10px;
  color: var(--theme-color-white);
  text-decoration: none;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  transition-duration: 0.3s;
}

.social-button:hover {
  border-color: var(--theme-color-blue);
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .container {
    padding: 60px 15px;
  }

  .content {
    gap: 35px;
  }

  .content h1 {
    font-size: 36px;
  }

  .subtitle {
    font-size: 16px;
    margin-top: -20px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .contact-card {
    padding: 30px 25px;
  }

  .contact-card:hover {
    transform: scale(1.02);
  }

  .contact-card h3 {
    font-size: 18px;
  }

  .contact-card a,
  .contact-card span {
    font-size: 13px;
  }

  .social-links h2 {
    font-size: 20px;
  }

  .social-button {
    padding: 10px 20px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 40px 10px;
  }

  .content h1 {
    font-size: 32px;
  }

  .subtitle {
    font-size: 15px;
  }

  .contact-card {
    padding: 25px 20px;
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
  }

  .contact-card h3 {
    font-size: 17px;
  }

  .contact-card a,
  .contact-card span {
    font-size: 12px;
  }

  .social-links h2 {
    font-size: 18px;
  }

  .social-button {
    padding: 10px 18px;
    font-size: 14px;
  }
}
</style>

