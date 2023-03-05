<template>

    <div class="header-container">
        <div class="brand">
            <span class="dark-orange">Un1</span>
            <span class="light-orange">Games</span>
        </div> - Adivinhe o número
    </div>
    
</template>

<script setup>

</script>

<style>

.header-container {
    width: 100%;
    min-width: 768px;
    height: 98px;
    box-shadow: #00000055 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 40px;
    color: #333;
    margin-bottom: 30px;
}

.header-container .brand {
    margin-right: 10px;
}

.header-container .brand .dark-orange {
    color: #D84E41;    
}

.header-container .brand .light-orange {
    color: #F16845;    
}
    
</style>