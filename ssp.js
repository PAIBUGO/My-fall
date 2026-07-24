 // Ativar visualizador de som
        setInterval(createSoundWave, 150);

        // Sistema de conquistas (easter eggs)
        let achievements = {
            firstClick: false,
            tripleClick: false,
            longHover: false,
            allPhotosHovered: false
        };

        // Detectar hover longo
        let hoverTimer;
        document.querySelector('.love-card').addEventListener('mouseenter', () => {
            hoverTimer = setTimeout(() => {
                if (!achievements.longHover) {
                    achievements.longHover = true;
                    showAchievement('🏆 Romântico Contemplador!', 'Você admirou a carta por 3 segundos');
                }
            }, 3000);
        });

        document.querySelector('.love-card').addEventListener('mouseleave', () => {
            clearTimeout(hoverTimer);
        });

        // Detectar todas as fotos visitadas
        let hoveredPhotos = new Set();
        document.querySelectorAll('.photo-frame').forEach((frame, index) => {
            frame.addEventListener('mouseenter', () => {
                hoveredPhotos.add(index);
                if (hoveredPhotos.size === 6 && !achievements.allPhotosHovered) {
                    achievements.allPhotosHovered = true;
                    showAchievement('📸 Guardião de Memórias!', 'Você visitou todas as nossas lembranças especiais');
                }
            });
        });

        function showAchievement(title, description) {
            const achievement = document.createElement('div');
            achievement.innerHTML = `
                <div style="font-size: 1.5rem; margin-bottom: 5px;">${title}</div>
                <div style="font-size: 0.9rem; opacity: 0.8;">${description}</div>
            `;
            achievement.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(45deg, #ff0040, #990026);
                color: white;
                padding: 20px 30px;
                border-radius: 15px;
                text-align: center;
                z-index: 9999;
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
                animation: achievement-popup 3s ease-in-out forwards;
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255, 0, 64, 0.3);
            `;
            
            document.body.appendChild(achievement);
            setTimeout(() => achievement.remove(), 3000);
        }

        // Observador de interseção para animações
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Inicialização quando a página carrega
        document.addEventListener('DOMContentLoaded', () => {
            // Observar elementos para animação
            const elements = document.querySelectorAll('.photo-frame, .special-message');
            elements.forEach(el => observer.observe(el));
            
            // Criar partículas iniciais
            for (let i = 0; i < 15; i++) {
                setTimeout(() => createParticle(), i * 300);
            }
            
            // Primeira notificação
            setTimeout(showNotification, 5000);
            
            // Efeito de entrada suave
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 1s ease';
                document.body.style.opacity = '1';
            }, 100);
        });

        // Adicionar CSS para animações extras
        const extraStyles = document.createElement('style');
        extraStyles.textContent = `
            @keyframes ultra-text {
                0% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0) rotate(0deg); 
                }
                50% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(1.2) rotate(180deg); 
                }
                100% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0) rotate(360deg); 
                }
            }
            
            @keyframes ripple-effect {
                0% { 
                    transform: scale(0); 
                    opacity: 1; 
                }
                100% { 
                    transform: scale(4); 
                    opacity: 0; 
                }
            }
            
            @keyframes notification-slide {
                0% { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
                10%, 90% { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
                100% { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
            }
            
            @keyframes sound-wave {
                0% { height: 10px; }
                100% { height: 50px; }
            }
            
            @keyframes te-amo-main {
                0% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0) rotate(0deg); 
                    background-position: 0% 50%;
                }
                20% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(1.5) rotate(5deg); 
                    background-position: 100% 50%;
                }
                40% { 
                    transform: translate(-50%, -50%) scale(1.2) rotate(-3deg); 
                    background-position: 0% 50%;
                }
                60% { 
                    transform: translate(-50%, -50%) scale(1.3) rotate(2deg); 
                    background-position: 100% 50%;
                }
                80% { 
                    transform: translate(-50%, -50%) scale(1.1) rotate(0deg); 
                    background-position: 0% 50%;
                }
                100% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0.5) rotate(0deg); 
                    background-position: 100% 50%;
                }
            }
            
            @keyframes te-amo-float {
                0% { 
                    opacity: 0; 
                    transform: scale(0) rotate(0deg); 
                }
                20% { 
                    opacity: 1; 
                    transform: scale(1.2) rotate(10deg); 
                }
                50% { 
                    opacity: 1; 
                    transform: scale(1) rotate(-5deg) translateY(-20px); 
                }
                80% { 
                    opacity: 1; 
                    transform: scale(1.1) rotate(5deg) translateY(-40px); 
                }
                100% { 
                    opacity: 0; 
                    transform: scale(0.5) rotate(0deg) translateY(-60px); 
                }
            }
            
            @keyframes te-amo-rain {
                0% { 
                    opacity: 0; 
                    transform: translateY(-50px) rotate(0deg) scale(0.8); 
                }
                10% { 
                    opacity: 1; 
                    transform: translateY(0px) rotate(10deg) scale(1); 
                }
                90% { 
                    opacity: 1; 
                    transform: translateY(calc(100vh - 100px)) rotate(-10deg) scale(0.9); 
                }
                100% { 
                    opacity: 0; 
                    transform: translateY(100vh) rotate(0deg) scale(0.5); 
                }
            }
            
            @keyframes love-pulse {
                0% { 
                    opacity: 0; 
                    transform: scale(0.8); 
                }
                50% { 
                    opacity: 1; 
                    transform: scale(1.2); 
                }
                100% { 
                    opacity: 0; 
                    transform: scale(1.5); 
                }
            }
            
            .animate-in {
                animation: slideUp 0.8s ease-out forwards;
            }
        `;
        document.head.appendChild(extraStyles);

        console.log('💖 Site de Amor carregado com sucesso! Feliz Dia dos Namorados! ✨');
    </script>

