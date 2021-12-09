# Colors

Здесь находятся инструменты для работы с цветовой схемой приложения на уровне компонентов:

`colors.ts` - Хранит константы, обозначающие все цвета, используемые в приложении, по умолчанию
импортирует массив всех доступных цветов

`ColorSchemeManager.ts` - Специальный класс для добавления к элементам 
[tailwind](https://tailwindcss.com/) стилей, связанных с цветовой схемой компонента. Объект `ColorSchemeManager` 
для `Component/Component.vue` можно найти в файле `Component/Component.color.ts`

`ColorScheme.vue` - [mixin Vue](https://v3.vuejs.org/guide/mixins.html#option-merging), объявляет параметр color и 
предоставляет вычисляемое на его основе свойство для получения цветовой схемы конкретного элемента
на основе общей схемы компонента, созданной как объект `ColorSchemeManager` и добавленной в `data` как `scheme`

Пример:
```javascript
import scheme from './Component.color'

{
    data: () => ({
        ...,
        scheme
    })
}
```
