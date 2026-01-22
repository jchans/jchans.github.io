---
title: Tmux 使用備忘
date: 2026-01-22
preview: ""
tags: 
  - Tool
  - tmux
---

## Start tmux at terminal start

ref: [How can I set my default shell to start up tmux](https://unix.stackexchange.com/questions/43601/how-can-i-set-my-default-shell-to-start-up-tmux)

```
if command -v tmux &> /dev/null && [ -n "$PS1" ] && [[ ! "$TERM" =~ screen ]] && [[ ! "$TERM" =~ tmux ]] && [ -z "$TMUX" ]; then
  exec tmux
fi
```

## Making TMUX use Alt+Num to select window

ref: [Making TMUX use Alt+Num to select window](https://superuser.com/questions/680238/making-tmux-use-altnum-to-select-window)

My preferred settings, create "~/.tmux.conf" and add setting as following:

```
bind-key -n M-1 select-window -t 0
bind-key -n M-2 select-window -t 1
bind-key -n M-3 select-window -t 2
bind-key -n M-4 select-window -t 3
bind-key -n M-5 select-window -t 4
```
