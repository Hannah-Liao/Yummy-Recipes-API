# Random Recipe API

Random Recipe API is an API that allows users to get data on world-wide recipes.

### API Servers
```
https://recipe-api-z2pg.onrender.com
```

## Get Random recipes

```HTTP
GET /recipes/random
```

Get one or more random recipes from the database.  This method supports several filters that can be used to get random recipes with specific properties (ie type, vegerarian, etc.)

By default, this methods returns a single random recipe. You can specify the number of random recipes to return via the `number` parameter.  

<br>

| param     | type     | Description                                                                                                                                                                                                                                                                                                                          | 
| :-------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
| number     | `Int`    | `default: 1` &nbsp; `min: 1` &nbsp; `max: 50` <br> The number of random recipes to retrieve.                                                                                                                                                                       |
| type      | `String` | Get random recipes with a specific type. Supported value:`main` and `dessert`. |
| vegerarian    | `String` | Get random vegerarian recipes . Supported value:`true` and `false`.                                                                                                                                          |
| vegan  | `String` | Get random vegan recipes . Supported value:`true` and `false`.                                                                                                                                                                                                                                            | 
**Response**

```ts
{
  // The number of recipes returned in this response
  count: number
  // The array of recipes
  data: Array<{
    _id: string
    // The recipe's name
    name: string
    // An array of ingredients for the recipe
    ingredients: string[]
    // An array of steps of instructions 
    instructions: string[]
    // The image url for the recipe
    imageUrl: string
    // minutes of cooking time
    cookingTime: number
    // indicate if the recipe vegetarian or not 
    vegetarian: string
    // indicate if the recipe vegan or not 
    vegan: string
    // type of the recipe
    type: string
    // number of serves
    serves: number
    // source of the recipe
    source: string
  }>
}
```

**Examples**

Get random recipe [try in browser](https://recipe-api-z2pg.onrender.com/recipes/random)

```HTTP
GET /recipes/random
```

Get 3 random recipes [try in browser](https://recipe-api-z2pg.onrender.com/recipes/random?number=2)

```HTTP
GET /recipes/random?number=3
```

Random recipe that is vegetarian **`AND`** with type "main" [try in browser](https://api.quotable.io/quotes/random?type=main&vegetarian=true)

```HTTP
GET /quotes/random?type=main&vegetarian=true
```

<br>

## All recipes

```HTTP
GET /recipes/all
```

Get all recipes matching a given query. By default, this will return a paginated list of all recipes of the database. Quotes can also be filter by type, vegetarian, and vegan.

**Query parameters**

| param     | type     | Description                                                                                                                                                                                                                                                                                                      |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | `String` | Get random recipes with a specific type. Supported value:`main` and `dessert`. |
| vegerarian    | `String` | Get random vegerarian recipes . Supported value:`true` and `false`.                                                                                                                                          |
| vegan  | `String` | Get random vegan recipes . Supported value:`true` and `false`.                                                                                                                                                                                                                                            | 
| limit     | `Int`    | `Min: 1` &nbsp; `Max: 150` &nbsp; `Default: 20` <br> Sets the number of results per page.                                                                                                                                                                                                                    |
| page      | `Int`    | `Min: 1` &nbsp; `Default: 1` <br> The page of results to return. If the value is greater than the total number of pages, request will not return any results                                                                                                                                                 |

**Response**

```ts
{
  // The number of recipes returned in this response
  count: number
  // The total number of recipes matching this query
  totalCount: number
  // The current page number
  page: number
  // The total number of pages matching this request
  totalPages: number
 // The array of recipes
  data: Array<{
    _id: string
    // The recipe's name
    name: string
    // An array of ingredients for the recipe
    ingredients: string[]
    // An array of steps of instructions 
    instructions: string[]
    // The image url for the recipe
    imageUrl: string
    // minutes of cooking time
    cookingTime: number
    // indicate if the recipe vegetarian or not 
    vegetarian: string
    // indicate if the recipe vegan or not 
    vegan: string
    // type of the recipe
    type: string
    // number of serves
    serves: number
    // source of the recipe
    source: string
  }>
}
```

**Examples**

Get the first page of recipes, with 20 results per page [try in browser](https://recipe-api-z2pg.onrender.com/recipes/all?page=1)

```HTTP
GET /recipes/all?page=1
```

Get the second page of recipes, with 30 results per page [try in browser](https://recipe-api-z2pg.onrender.com/recipes/all?page=2&limit=30)

```HTTP
GET /recipes/all?page=2&limit=30
```

Get the second page of recipes with the type `main` [try in browser](https://recipe-api-z2pg.onrender.com/recipes/all?page=2&type=main)

```HTTP
GET /recipes/all?page=2&type=main
```