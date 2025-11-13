// Constants
const CHALLENGE_DAYS = 180;
const MEALS_PER_DAY = 3;

// Momentos Destacados por día
const HIGHLIGHTS = {
  1: { quote: '"Esto es fácil, no sé por qué hace tanta queja de gente" 😄', emoji: '🚀' },
  5: { quote: '"¿Vieron ese anuncio de pizza? 👀"', emoji: '🍕' },
  10: { quote: '"Esto es más fácil de lo esperado (mentira)" 😅', emoji: '💪' },
  15: { quote: '"¿Es normal pensar en pollo a las 3 AM?" 🤔', emoji: '🐔' },
  20: { quote: '"Todavía aquí, sorprendido" 😲', emoji: '⭐' },
  30: { quote: '"¡Un mes! Soy una leyenda" 🏆', emoji: '🏆' },
  45: { quote: '"La gente me pregunta si extraño la carne" 🤷', emoji: '🌱' },
  60: { quote: '"Dos meses sin carne, sin morir" 🎉', emoji: '🎉' },
  90: { quote: '"MITAD DEL CAMINO BABY 🎊"', emoji: '🎊' },
  120: { quote: '"Vegetal puro" 🥬', emoji: '🥬' },
  150: { quote: '"150 días de gloria" 👑', emoji: '👑' },
  180: { quote: '"🎊 LO LOGRÉ. SOY VEGETARIANO CERTIFICADO 🥗"', emoji: '🎊' }
};

// DOM Elements
const daysCompleted = document.getElementById('daysCompleted');
const mealsCount = document.getElementById('mealsCount');
const progressPercent = document.getElementById('progressPercent');
const progressBar = document.getElementById('progressBar');
const progressLabel = document.getElementById('progressLabel');
const mealsGallery = document.getElementById('mealsGallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const timelineContainer = document.getElementById('timelineContainer');
const highlightQuote = document.getElementById('highlightQuote');
const highlightAchievements = document.getElementById('highlightAchievements');
const highlightMilestone = document.getElementById('highlightMilestone');

// Data
let meals = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMealsFromRepo();
    setupEventListeners();
    renderHighlights();
});

// Event Listeners
function setupEventListeners() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderMeals();
        });
    });
}

// Load Meals from Repository
async function loadMealsFromRepo() {
    try {
        console.log('📥 Cargando comidas del repositorio...');

        // Cargar el archivo que enumera todas las comidas
        // En producción, esto vería la API de GitHub o un archivo generado
        // Por ahora, usamos un enfoque simple con fetch al directorio meals

        const response = await fetch('./meals/');

        if (!response.ok) {
            console.log('📁 Carpeta meals vacía o no existe');
            updateStats();
            renderMeals();
            renderTimeline();
            return;
        }

        // Como es GitHub Pages (estático), intentamos cargar un manifest
        // O cargamos de forma directa desde los archivos conocidos

        // Para ahora, mostrar mensaje de carga
        await loadMealsManifest();

    } catch (error) {
        console.log('✅ Interfaz lista (sin comidas cargadas aún)');
        updateStats();
        renderMeals();
        renderTimeline();
    }
}

// Load Meals Manifest (generado por build)
async function loadMealsManifest() {
    try {
        // Intentar cargar manifest.json si existe
        const response = await fetch('./meals-manifest.json');

        if (response.ok) {
            const data = await response.json();
            meals = data.meals || [];
            console.log(`✅ Cargadas ${meals.length} comidas`);
        }

        updateStats();
        renderMeals();
        renderTimeline();

    } catch (error) {
        console.log('ℹ️ Manifest no disponible, usando datos vacíos');
        updateStats();
        renderMeals();
        renderTimeline();
    }
}

// Render Highlights
function renderHighlights() {
    const completedDays = parseInt(daysCompleted.textContent) || 0;

    if (completedDays === 0) {
        highlightQuote.innerHTML = '🎯 Haz tu primer PR para comenzar el reto';
        highlightAchievements.innerHTML = `
            <h3>📊 Estado Inicial</h3>
            <ul>
                <li>Preparado para comenzar</li>
                <li>Cero traiciones a la vegetación</li>
                <li>Mentalidad positiva: ✅</li>
            </ul>
        `;
        highlightMilestone.innerHTML = `
            <div class="milestone-label">🎯 PRÓXIMO HITO</div>
            <div class="milestone-text">Día 1: El Comienzo</div>
        `;
        return;
    }

    // Encontrar el highlight más cercano
    let currentHighlight = null;
    let nextMilestone = null;

    const sortedDays = Object.keys(HIGHLIGHTS).map(Number).sort((a, b) => a - b);

    // Encontrar highlight actual
    for (let i = sortedDays.length - 1; i >= 0; i--) {
        if (completedDays >= sortedDays[i]) {
            currentHighlight = sortedDays[i];
            break;
        }
    }

    // Encontrar próximo hito
    for (let day of sortedDays) {
        if (day > completedDays) {
            nextMilestone = day;
            break;
        }
    }

    // Si completó el reto
    if (completedDays >= 180) {
        nextMilestone = 180;
    }

    // Mostrar highlight actual
    if (currentHighlight && HIGHLIGHTS[currentHighlight]) {
        const highlight = HIGHLIGHTS[currentHighlight];
        highlightQuote.innerHTML = `${highlight.emoji} ${highlight.quote}`;
    }

    // Mostrar logros
    const achievements = [];
    if (completedDays >= 1) achievements.push('Primer día completado 🎉');
    if (completedDays >= 5) achievements.push('Primera semana en proceso');
    if (completedDays >= 10) achievements.push('Doble dígito alcanzado 💪');
    if (completedDays >= 20) achievements.push('Casi un mes');
    if (completedDays >= 30) achievements.push('¡UN MES COMPLETO! 🏆');
    if (completedDays >= 45) achievements.push('1.5 meses aguantando firme');
    if (completedDays >= 60) achievements.push('DOS MESES SIN CARNE 🎉');
    if (completedDays >= 90) achievements.push('MITAD DEL CAMINO 🎊');
    if (completedDays >= 120) achievements.push('4 meses de gloria');
    if (completedDays >= 150) achievements.push('150 días de consistencia');
    if (completedDays >= 180) achievements.push('🎊 META ALCANZADA - LEYENDA VIVIENTE 🏆');

    const achievementsList = achievements.length > 0
        ? achievements.map(a => `<li>${a}</li>`).join('')
        : '<li>¡Comienza con tu primer PR!</li>';

    highlightAchievements.innerHTML = `
        <h3>🎯 Logros Desbloqueados</h3>
        <ul>${achievementsList}</ul>
    `;

    // Mostrar próximo hito
    if (nextMilestone && HIGHLIGHTS[nextMilestone]) {
        const daysLeft = nextMilestone - completedDays;
        highlightMilestone.innerHTML = `
            <div class="milestone-label">🎯 PRÓXIMO HITO</div>
            <div class="milestone-text">Día ${nextMilestone} (Faltan ${daysLeft} días)</div>
        `;
    } else if (completedDays >= 180) {
        highlightMilestone.innerHTML = `
            <div class="milestone-label">🎊 OBJETIVO FINAL</div>
            <div class="milestone-text">¡GANASTE! Eres vegetariano certificado 🥗</div>
        `;
    }
}

// Render Meals Gallery
function renderMeals() {
    const filteredMeals = currentFilter === 'all'
        ? meals
        : meals.filter(meal => meal.type === currentFilter);

    if (filteredMeals.length === 0) {
        mealsGallery.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <p>📭 Aún no hay comidas aprobadas</p>
                <p class="empty-hint">
                    Las comidas aparecerán aquí cuando se aprueben los Pull Requests ✅
                </p>
            </div>
        `;
        return;
    }

    mealsGallery.innerHTML = filteredMeals.map(meal => `
        <div class="meal-card">
            <img src="./meals/${meal.date}/${meal.image}" alt="Comida ${meal.type}" class="meal-image">
            <div class="meal-content">
                <div class="meal-header">
                    <span class="meal-type ${meal.type}">${capitalize(meal.type)}</span>
                    <span class="meal-date">${formatDate(meal.date)}</span>
                </div>
                <span class="meal-time">🕐 ${meal.time}</span>
                <p class="meal-description">${meal.description || 'Sin descripción'}</p>
                <span class="meal-status">✅ Aprobado</span>
            </div>
        </div>
    `).join('');
}

// Update Stats
function updateStats() {
    const uniqueDates = new Set(meals.map(m => m.date));
    const completeDays = Array.from(uniqueDates).filter(date => {
        const dayMeals = meals.filter(m => m.date === date);
        return dayMeals.length === MEALS_PER_DAY;
    }).length;

    const totalMeals = meals.length;
    const progress = (completeDays / CHALLENGE_DAYS) * 100;

    daysCompleted.textContent = completeDays;
    mealsCount.textContent = totalMeals;
    progressPercent.textContent = Math.round(progress) + '%';
    progressBar.style.width = progress + '%';
    progressLabel.textContent = `${completeDays} de ${CHALLENGE_DAYS} días`;

    // Actualizar highlights
    renderHighlights();
}

// Render Timeline
function renderTimeline() {
    const uniqueDates = [...new Set(meals.map(m => m.date))].sort().reverse();

    if (uniqueDates.length === 0) {
        timelineContainer.innerHTML = `
            <div class="empty-state">
                <p>📅 Aún no hay días completados</p>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">
                    Los días aparecerán cuando se aprueben los PRs 🚀
                </p>
            </div>
        `;
        return;
    }

    timelineContainer.innerHTML = uniqueDates.map(date => {
        const dayMeals = meals.filter(m => m.date === date).sort((a, b) => a.time.localeCompare(b.time));
        const isComplete = dayMeals.length === MEALS_PER_DAY;

        return `
            <div class="timeline-day">
                <div class="timeline-content">
                    <div class="timeline-date">
                        ${formatDate(date)} ${isComplete ? '✅' : '⏳'}
                    </div>
                    <div class="timeline-meals">
                        ${dayMeals.map(m => `
                            <span class="timeline-meal">
                                ${getEmoji(m.type)} ${capitalize(m.type)}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Utility Functions
function formatDate(dateStr) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('es-ES', options);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getEmoji(type) {
    const emojis = {
        desayuno: '🥐',
        almuerzo: '🍱',
        cena: '🍽️'
    };
    return emojis[type] || '🍽️';
}

// Load example data for demo
function loadExampleData() {
    // Datos de ejemplo para demostración
    meals = [
        {
            date: '2025-11-12',
            type: 'desayuno',
            time: '07:30',
            description: 'Omelette vegetariano con champiñones y cebolla. Pan integral tostado.',
            image: 'desayuno.jpg'
        },
        {
            date: '2025-11-12',
            type: 'almuerzo',
            time: '12:45',
            description: 'Ensalada fresca con lechuga, tomate, pepino y zanahoria.',
            image: 'almuerzo.jpg'
        },
        {
            date: '2025-11-12',
            type: 'cena',
            time: '19:00',
            description: 'Pasta integral con salsa de tomate y verduras salteadas.',
            image: 'cena.jpg'
        }
    ];
}
