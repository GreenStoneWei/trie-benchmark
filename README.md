## Auto Complete
比較在 array 與 Trie 中搜尋的所需時間

### fake dictionary
使用 faker 套件產生假字典檔，存於 `./collection/*.txt`

### 實測
1. npm ci && node index.js
2. 讀入字典檔 `POST http://localhost:3000/complete/load?num={num}`，num 為 collection 資料夾底下之檔案名稱（數量）
3. `GET http://localhost:3000/complete/search?q=Aut%20facili&type={type}`，其中 q 為 encoded 欲搜尋字串，type 為 array 或 trie 其一

### 結果
|collection 數|100|1000|10000|50000|100000|200000|500000|
|-|-|-|-|-|-|-|-|
|array (1 char)|3|4|7|10|14|26|72|
|array (10 char)|4|5|5|9|12|22|61|
|trie (1 char)|5|6|24|90|178|372|1068|
|trie (10 char)|3|4|4|3|4|4|4|

- Array 的搜尋時間不因字串長度變化 -> 需遍歷全 array
- Trie 的搜尋時間會隨輸入字大幅減少 -> 只需遍歷 trie 節點下子樹




