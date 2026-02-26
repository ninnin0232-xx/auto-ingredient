const RECIPE_CATEGORIES = {
    'japanese': '和食',
    'western': '洋食',
    'chinese': '中華',
    'other': 'その他'
};

const INGREDIENT_CATEGORIES = {
    'meat': { id: 'meat', name: '肉類', order: 1 },
    'seafood': { id: 'seafood', name: '魚介類', order: 2 },
    'vegetable': { id: 'vegetable', name: '野菜類', order: 3 },
    'dairy_egg': { id: 'dairy_egg', name: '卵・乳製品', order: 4 },
    'soy': { id: 'soy', name: '大豆製品', order: 5 },
    'seaweed': { id: 'seaweed', name: '海藻類', order: 6 },
    'carb': { id: 'carb', name: '穀物・麺類', order: 7 },
    'seasoning': { id: 'seasoning', name: '調味料', order: 8 },
    'other': { id: 'other', name: 'その他', order: 9 }
};

const INGREDIENT_MAP = {
    '豚肉': 'meat',
    '豚ロース肉': 'meat',
    '鶏肉': 'meat',
    '合い挽き肉': 'meat',
    'ソーセージ': 'meat',
    '卵': 'dairy_egg',
    'バター': 'dairy_egg',
    '玉ねぎ': 'vegetable',
    'じゃがいも': 'vegetable',
    'にんじん': 'vegetable',
    'ネギ': 'vegetable',
    'トマト缶': 'vegetable',
    '豆腐': 'soy',
    'わかめ（乾燥）': 'seaweed',
    'ご飯': 'carb',
    'パスタ': 'carb',
    'カレールー': 'seasoning',
    '醤油': 'seasoning',
    'みりん': 'seasoning',
    '酒': 'seasoning',
    'すりおろし生姜': 'seasoning',
    'ケチャップ': 'seasoning',
    'コンソメ': 'seasoning',
    '塩こしょう': 'seasoning',
    '味噌': 'seasoning',
    'サラダ油': 'seasoning',
    'ごま油': 'seasoning',
    'オリーブオイル': 'seasoning',
    'だし汁': 'seasoning',
    '水': 'other'
};

function getIngredientCategory(ingredientName) {
    return INGREDIENT_MAP[ingredientName] || 'other';
}

const RECIPES = [
    {
        id: 'fried-rice',
        name: 'チャーハン',
        category: 'chinese',
        ingredients: [
            { name: 'ご飯', amount: 200, unit: 'g' },
            { name: '卵', amount: 1, unit: '個' },
            { name: 'ソーセージ', amount: 2, unit: '本' },
            { name: 'ネギ', amount: 15, unit: 'g' },
            { name: '醤油', amount: 1, unit: '大さじ' },
            { name: 'ごま油', amount: 1, unit: '大さじ' },
            { name: '塩こしょう', amount: 1, unit: '少々' }
        ]
    },
    {
        id: 'curry',
        name: 'カレーライス',
        category: 'western',
        ingredients: [
            { name: 'カレールー', amount: 1, unit: 'かけ' },
            { name: '豚肉', amount: 100, unit: 'g' },
            { name: '玉ねぎ', amount: 0.5, unit: '個' },
            { name: 'じゃがいも', amount: 0.5, unit: '個' },
            { name: 'にんじん', amount: 0.25, unit: '本' },
            { name: '水', amount: 150, unit: 'ml' },
            { name: 'サラダ油', amount: 0.5, unit: '大さじ' }
        ]
    },
    {
        id: 'pork-ginger',
        name: '豚の生姜焼き',
        category: 'japanese',
        ingredients: [
            { name: '豚ロース肉', amount: 150, unit: 'g' },
            { name: '玉ねぎ', amount: 0.25, unit: '個' },
            { name: '醤油', amount: 1.5, unit: '大さじ' },
            { name: 'みりん', amount: 1, unit: '大さじ' },
            { name: '酒', amount: 1, unit: '大さじ' },
            { name: 'すりおろし生姜', amount: 1, unit: '小さじ' },
            { name: 'サラダ油', amount: 0.5, unit: '大さじ' }
        ]
    },
    {
        id: 'omelet-rice',
        name: 'オムライス',
        category: 'western',
        ingredients: [
            { name: 'ご飯', amount: 200, unit: 'g' },
            { name: '卵', amount: 2, unit: '個' },
            { name: '鶏肉', amount: 50, unit: 'g' },
            { name: '玉ねぎ', amount: 0.25, unit: '個' },
            { name: 'ケチャップ', amount: 3, unit: '大さじ' },
            { name: 'バター', amount: 10, unit: 'g' },
            { name: '塩こしょう', amount: 1, unit: '少々' }
        ]
    },
    {
        id: 'miso-soup',
        name: '味噌汁',
        category: 'japanese',
        ingredients: [
            { name: '豆腐', amount: 50, unit: 'g' },
            { name: 'わかめ（乾燥）', amount: 1, unit: 'g' },
            { name: 'ネギ', amount: 5, unit: 'g' },
            { name: 'だし汁', amount: 200, unit: 'ml' },
            { name: '味噌', amount: 1, unit: '大さじ' }
        ]
    },
    {
        id: 'spaghetti',
        name: 'ミートソースパスタ',
        category: 'western',
        ingredients: [
            { name: 'パスタ', amount: 100, unit: 'g' },
            { name: '合い挽き肉', amount: 80, unit: 'g' },
            { name: '玉ねぎ', amount: 0.5, unit: '個' },
            { name: 'トマト缶', amount: 100, unit: 'g' },
            { name: 'ケチャップ', amount: 1, unit: '大さじ' },
            { name: 'コンソメ', amount: 0.5, unit: '小さじ' },
            { name: 'オリーブオイル', amount: 1, unit: '大さじ' }
        ]
    }
];

let cart = [];
let dom = {};

function init() {
    dom = {
        grid: document.getElementById('recipe-grid'),
        cartUl: document.getElementById('cart-ul'),
        ingredientsUl: document.getElementById('ingredients-ul'),
        selectedCount: document.getElementById('selected-count')
    };

    renderRecipes();
    updateOutput();
}

function renderRecipes() {
    dom.grid.innerHTML = '';

    const groupedRecipes = {};
    Object.keys(RECIPE_CATEGORIES).forEach(key => {
        groupedRecipes[key] = [];
    });

    RECIPES.forEach(recipe => {
        const cat = recipe.category || 'other';
        if (!groupedRecipes[cat]) groupedRecipes[cat] = [];
        groupedRecipes[cat].push(recipe);
    });

    Object.keys(RECIPE_CATEGORIES).forEach(catKey => {
        const recipesInCategory = groupedRecipes[catKey];
        if (recipesInCategory.length === 0) return;

        const catHeader = document.createElement('h3');
        catHeader.className = 'recipe-category-header';
        catHeader.textContent = RECIPE_CATEGORIES[catKey];
        dom.grid.appendChild(catHeader);

        const catGrid = document.createElement('div');
        catGrid.className = 'recipe-category-grid';

        recipesInCategory.forEach(recipe => {
            const btn = document.createElement('button');
            btn.className = 'recipe-btn';
            btn.dataset.id = recipe.id;
            btn.innerHTML = `<span class="recipe-name">${recipe.name}</span>`;
            btn.addEventListener('click', () => toggleRecipeInCart(recipe.id));

            if (cart.find(item => item.id === recipe.id)) {
                btn.classList.add('active');
            }

            catGrid.appendChild(btn);
        });

        dom.grid.appendChild(catGrid);
    });
}

function toggleRecipeInCart(recipeId) {
    const existingIndex = cart.findIndex(item => item.id === recipeId);
    if (existingIndex >= 0) {
        // Remove
        cart.splice(existingIndex, 1);
    } else {
        // Add
        cart.push({ id: recipeId, servings: 1 });
    }

    // Update grid buttons visual
    document.querySelectorAll('.recipe-btn').forEach(btn => {
        if (cart.find(item => item.id === btn.dataset.id)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    updateOutput();
}

function changeCartServings(recipeId, delta) {
    const item = cart.find(i => i.id === recipeId);
    if (item) {
        item.servings += delta;
        if (item.servings < 1) item.servings = 1;
        if (item.servings > 50) item.servings = 50;
        updateOutput();
    }
}

function removeCartItem(recipeId) {
    cart = cart.filter(item => item.id !== recipeId);
    renderRecipes(); // update active states on grid
    updateOutput();
}

function updateOutput() {
    dom.selectedCount.textContent = cart.length;

    // Render Cart Items
    if (cart.length === 0) {
        dom.cartUl.innerHTML = '<li class="empty-message">レシピをタップして追加してください</li>';
        dom.ingredientsUl.innerHTML = '<li class="empty-message">材料がここに表示されます</li>';
        return;
    }

    dom.cartUl.innerHTML = '';
    cart.forEach((cartItem, index) => {
        const recipe = RECIPES.find(r => r.id === cartItem.id);
        if (!recipe) return;

        const li = document.createElement('li');
        li.className = 'cart-item';
        li.style.animationDelay = `${index * 0.05}s`;

        li.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${recipe.name}</span>
            </div>
            <div style="display: flex; align-items: center;">
                <div class="servings-control">
                    <button class="btn-minus" data-id="${recipe.id}">−</button>
                    <div class="servings-display">
                        <span class="count">${cartItem.servings}</span><span class="unit">人前</span>
                    </div>
                    <button class="btn-plus" data-id="${recipe.id}">+</button>
                </div>
                <button class="cart-item-remove" data-id="${recipe.id}" title="削除">&times;</button>
            </div>
        `;
        dom.cartUl.appendChild(li);
    });

    // Re-attach listeners for cart buttons
    document.querySelectorAll('.cart-item .btn-minus').forEach(btn => {
        btn.addEventListener('click', (e) => changeCartServings(e.target.dataset.id, -1));
    });
    document.querySelectorAll('.cart-item .btn-plus').forEach(btn => {
        btn.addEventListener('click', (e) => changeCartServings(e.target.dataset.id, 1));
    });
    document.querySelectorAll('.cart-item .cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => removeCartItem(e.target.dataset.id));
    });

    // Render Total Ingredients
    calculateAndRenderTotalIngredients();
}

function calculateAndRenderTotalIngredients() {
    const totals = new Map();

    cart.forEach(cartItem => {
        const recipe = RECIPES.find(r => r.id === cartItem.id);
        if (!recipe) return;

        recipe.ingredients.forEach(ing => {
            const catId = getIngredientCategory(ing.name);
            const key = `${ing.name}|${ing.unit}|${catId}`;
            const amountToAdd = ing.amount * cartItem.servings;

            if (totals.has(key)) {
                totals.get(key).amount += amountToAdd;
            } else {
                totals.set(key, {
                    name: ing.name,
                    unit: ing.unit,
                    amount: amountToAdd,
                    categoryId: catId
                });
            }
        });
    });

    const sortedIngredients = Array.from(totals.values()).sort((a, b) => {
        const catA = INGREDIENT_CATEGORIES[a.categoryId].order;
        const catB = INGREDIENT_CATEGORIES[b.categoryId].order;
        if (catA !== catB) {
            return catA - catB;
        }
        return a.name.localeCompare(b.name, 'ja');
    });

    dom.ingredientsUl.innerHTML = '';

    let currentCategory = null;
    let index = 0;

    sortedIngredients.forEach((data) => {
        if (currentCategory !== data.categoryId) {
            currentCategory = data.categoryId;
            const catLi = document.createElement('li');
            catLi.className = 'ingredient-category-header';
            catLi.innerHTML = `<span>${INGREDIENT_CATEGORIES[currentCategory].name}</span>`;
            catLi.style.animationDelay = `${index * 0.03}s`;
            dom.ingredientsUl.appendChild(catLi);
            index++;
        }

        const li = document.createElement('li');
        li.className = 'ingredient-item';
        li.style.animationDelay = `${index * 0.03}s`;

        let calcAmount = data.amount;
        if (!Number.isInteger(calcAmount)) {
            calcAmount = parseFloat(calcAmount.toFixed(2));
        }

        li.innerHTML = `
            <span class="ingredient-name">${data.name}</span>
            <span class="ingredient-amount">${calcAmount}${data.unit}</span>
        `;
        dom.ingredientsUl.appendChild(li);
        index++;
    });
}

document.addEventListener('DOMContentLoaded', init);
