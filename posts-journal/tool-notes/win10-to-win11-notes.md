---
title: Windows 10 升級 Windows 11 後的一些設定筆記
date: 2025-10-16
preview: ""
tags: Tool
---

參考工具：問 ChatGPT ：「Windows 10 升級為 Windows 11 後，如何最佳化自己的系統？」

1. 關掉動畫效果

設定→協助工具→視覺效果

2. 把工作列往左移（開始按鈕移到最左邊）

設定→個人化→工作列→工作列行為→工作列對齊（選靠左）

3. 用 Win10 版的右鍵選單

ref: https://learn.microsoft.com/en-us/answers/questions/2287432/(article)-restore-old-right-click-context-menu-in?forum=windows-all&referrer=answers

Restore the old Context Menu in Windows 11

Terminal(Admin) Command:

```
reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

Restore Modern Context menus in Windows 11

To undo this change, in a Terminal Window, execute this command:

```
reg.exe delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
```

4. 如果是為了中文寫作，我還是比較喜歡新酷音，所以安裝 PIME

https://github.com/EasyIME/PIME
