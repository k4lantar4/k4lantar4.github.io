# **K4LANTAR4 --> STRATEGIC MANIFESTO 2026**

"CODE IS LIQUID. ARCHITECTURE IS SOLID."  
This manifesto serves as a living blueprint for my architectural decisions, preferred tech stack, and operational philosophy.

## **1\. CORE IDENTITY & PHILOSOPHY**

- **Architect:** k4lantar4
- **System:** Arch Linux / CachyOS (Performance Optimized)
- **Workflow:** TUI-centric | Keyboard-driven | Modal-editing
- **Principle:** KISS & Unix Philosophy
- **Goal:** Building Autonomous High-Leverage Solo-Business focused on Zero-Downtime Industrial Infrastructure

## **2\. TECH RADAR**

### **🟢 ADOPT**

![][image1]Infrastructure & core tools ready for production environments.

- **Infrastructure:** Docker, PostgreSQL, DMS, chezmoi
- **Backend:** Go (Golang), Python (FastAPI/Alembic)
- **Editor:** NeoVim (LazyVim distribution)
- **Shell:** Zsh \+ Antidote, Tmux \+ TPM, Atuin, Navi, tldr
- **Security:** Bitwarden, Bitwarden-CLI (BW-CLI)
- **Knowledge Base:** Obsidian (Local Markdown), Notion (Archive)
- **Input Layer:** kanata (Caps-to-Escape, Space-Layer, UIOP)

### **🟡 TRIAL**

![][image2]Tools currently being tested and integrated into the workflow.

- **AI Workforce:** n8n (Self-hosted), LangGraph (Stateful Agents)
- **Local AI:** Ollama-ROCm (RX 5700 XT Acceleration)
- **Personal UI:** quickshell (Wayland-native dashboards)
- **Networking:** Headscale (Private Mesh Network)

### **🔵 ASSESS**

![][image3]Technologies under observation for future architectural shifts.

- **Database:** pgvector (RAG), ClickHouse (Analytics)
- **Performance:** eBPF (Observability/Networking), NATS.io
- **Orchestration:** HashiCorp Nomad (KISS Container Mgmt)
- **Workflows:** Temporal.io (Fault-tolerant executions)
- **Front-end:** HTMX \+ Tailwind (Lite-web interfaces)

## **3\. CLOUD & ONLINE SERVICES (Free Tier Priority)**

| Priority Level | Services                                             | Primary Use Case                                                         |
| :------------- | :--------------------------------------------------- | :----------------------------------------------------------------------- |
| **Primary**    | Cloudflare (DNS/Tunnels), Supabase (Auth/DB), GitHub | Edge Networking & Security, Auth/DB, Version Control                     |
| **Secondary**  | Vercel, Tailscale, Resend, Upstash, Fly.io, Neon     | Serverless UI, Mesh Network, Email, Caching, Edge Compute, Serverless DB |

## **4\. ARCHITECTURE POLICIES**

### **Input Architecture**

- ![][image4]**Caps-Hold:** Caps Lock \-\> Escape (Tap) / L-Control (Hold)
- **Space-Mod:** Spacebar as a momentary toggle for Nav/Symbols
- **Home-Row:** Home-row modifiers for Shift, Alt, and Super
- **UIOP Layer:** Wayland/Hyprland workspace management

### **Security & Secret Management**

- **Vault:** Use Bitwarden as the single source of truth for all credentials.
- **CLI Logic:** Inject secrets via bw-cli to absolutely avoid hardcoded keys.
- **Encryption:** Use SOPS or Age for encrypting secrets inside chezmoi.

### **Strategic Architect Notes**

- **Local-First AI:** Offload RAG tasks to Ollama-ROCm to minimize API costs.
- **Autonomous Agents:** Leverage LangGraph to build non-repetitive AI workers.
- **Sync Strategy:** Keep Obsidian and Dotfiles synced via Git/chezmoi.
- **Scale-to-Zero:** Favor Serverless architectures (Supabase/Neon) for low-cost, zero-maintenance starts, while maintaining ORM abstraction to allow easy migration to self-hosted Postgres if needed.

_Mohammad Reza Jangi Ashkanani. Thank you for reading my Manifesto._  
**Contact:**

- **GitHub:** [github.com/k4lantar4](https://github.com/k4lantar4)
- **Email:** \[m.r3za.j@gmail.com\]

[image1]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAA1CAYAAAD8i7czAAAEkElEQVR4Xu3dS8huUxgA4OVOybWUiAkRUi4RxZ+JW8IAJSSXpCQDpZDOxMAtycjABJGpAblEJoTIrQwYkYE7uSX3/f7fWue83/vv45z4/4mep1b/et+1vr33953J29p77dMaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIY5emqvT+2NqV1fxv6NP6f2V00W703t4N4/vS3P331qz6Z4vcW5ziy5lam9PbUPpnZRGdsIcQ3b+o0AAFZF0fDz1K6c2sM9roVEjbcl5n9Xk0XM2bX34/yvprEPp/Z8itdb/T4Rfz61y6d2c4+j6MzqZ/6rON7tNQkAUEXR8FhNtuXi5IQSb4+Yf2JN/oOYv2dNbpBd2vL3if41KR7ynFHErZf4rut5PADgfypuO26taBj5z9pi9Svi6GdP9/wfbfn24n49H77q/Xu2DK+KY92W4nod+VzRn2vZjW1xjGg7lLEQ1xhjb7bFqlYt2OZEfse2ONfvbXGMet64hTzOe2QZCw+0LeO3pvzdPZfFsWNlEQBgs1GwfVMHiphzfoof7bmVHn/c4+GdHv/UFgXPGT3+Mc3J8+O2aI7zCthObbFSl1uMvdXHd+vxSz1+vMfDYT0+q8eP9PiuzTMW8bspnhNz9knx3j13eI8v7fGwf4+f6PF9PT62x9G/o/fjOb6I498DAGCNURyNtsfycDu+57Nj2pbNAuGItjwn+qekeOTqnOGFqf2W4nh2LVa05sTn9i1xFIVZPc94Ti7nsgN6brTzlodX1c/Eb5CvI9TzPpPikXsw9cOm1AcA2KZYARtFy/BtiYc723KRU4uVKs+JW6F1/jklPjfFQ+TzKtdNPRfXnds49iWpn83lQhR249bpDyl/XM9VD7Xl7z/mXJf6W1M/AwCw3WoRUeOc29QWuyrrnDo/RO7F3o+iKp79ymPDziUeIhevHcl+6fm5FmKX6vu9P5za5o+fPdeW5zzVFoXcEM/IjdeW3NIWv8FrPQ5xXS/3/px43i/m/tr/1pU6AIBVUSiMZ6iyuBWZi5Xox4PzOT45xSMXz4aF+3ucxTve6jH3KvFQi6UQcRREVeRvqMkkxvOD/iEXizFezxXObmuv98ISf5nikbsq9a9IY1UUaq/0/idt/hoAAGZfbHtIz92bcnVOxPn1G1/03DBXBEV8UImHKKj+6fPRz+9ny+rckcv9/C61sRFgFItzn1/pufEc29gQkEU8VgvDWCkbov99isdzgnGLNkQ/NksMEccmBgCANUbBkls18qf1+OuUizZepzFE/9oyZyWNx2aEOr8WiCPOx8gtq2MHLg8vjcX/nFA//1HP5RYbLYaxgzXa2LwwViFHe7L/zeox61j26UwOAGCzWOm5empH1YHupLb29l48g3VxyVVxGzSOW3dwboR4hixeqzEndr1eVpNFbGSIF+ceWge6KNTq8eOdaxeUXBWrdHkzBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGynvwEV/GwjCsObMwAAAABJRU5ErkJggg==
[image2]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAA1CAYAAAD8i7czAAAEmElEQVR4Xu3dSah+YxgA8GOeSoZsDLGgZB4KC7pJhIyZE8lOpBBhY0NIQimxkY2yYWFmYYOyELYsJENkLKIMcZ6+93Wf+9xzh+7//sPn96un//s873vO9/3P5ns60x0GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE1x+xiH1+IG7TzGK7W4BeK7XV+L/3GbfYwAgDm3+xh/jvFqnVin2Db7cIzXSm1LxP5PqMU1PD8s/17/pPpdNvsYAQBzbIdh1kzEGazaVKzH8cPGtluvm4aN7T+22ch2W8PWPkYAwJz7eZg1E8e0f6dcOcZvw2z+hVT/cljcPsb7pXqXx91U7Ydhtp9nSv27MX4stc+G2T52HRYbswPa3LZtLmp/tHF2b5ub+r/GZco+F2foLh/j8zT/0hjvjPFsW5O92GoRZ6T6eo5R9+6wuI99y1xf//qw8vcHAObQ3sPSH/6pJiBqXwyz5qjn0bB0kZ+X8n7Grqv7jIYjNytnDrM1e7a8NiMxPinlvRbxVMs/bXkW+R4pP6jVnmj5+y3vLmn5sS1/u+Xn/r1i8XPvH+OiUl9o49h+6rusdox2a/k5Le/fJeufHU3loW38+5IVAMBcih/97UuePT4sbwoeGZauq9vEfVl5mzx/S8kfLXmIe7tW23+I2qkpP6TVuptLHmoeonZgGle1VvNwxBj7l1pdV/OpY7RLynvtzjaOM3Z1H3Hm7+NSAwDmzJtjfF1qtSmoeRWXH+uayM8u+XZpfGGZi/gpRa+Fo9O4m2pePhjj+5TH/EMpf67V8uf0zwoPpHG3Tan1y69T7h4Wv3f+/mGtY3Rry6uoXdrGv47xcpoLMX9cqQEAcyZ+8L8aZpcne9TGoebV1AMBU/lhY1wwxi8TcytF6I1W9taw/J62WBNn1XLeL7H2fKXo84+1cXdjq3f3lLzrjd9dY1w9xpMt79Y6RtGMvZHyLq+J8Ykp36vVAIA59skwu5wW94/liCbgtLRuraYg5h+eqGXRkFw3UQ9TtSzm+2XBXMvNS6+tla/2jrmYP2Wi9mDJb0t5uK/Vs8j7vXU9X+0YxTguFWfxYEJfc3oad3FGsdYAgDkSlydX+rGPen5Ks677Zoz3Ul7n75ioPd1qcaapino0H91Rw+wSYVf3Fdaqxf1kdU3kU2fl8jg/CBH3peX5lS6HRi2ebu3iAYW6rub1GPUnSLsbWh7vxgvR8NZ9RF5rAMAciR/6hVpsvh2WNgIftbxH3OuV9Xo/OzW15vxWnxJv+s/7j1d4dPUesjDVONWHIHZseUSMu/w5ETulubh8mufizFreZ1yGrZ8b4qxd3m6lM24Rqx2jvI94FUk8NZrnpprNelYOAPgfi8uPVwxLnybNrqqFDbh2jINrcQvEZcSFWhxdM8bFtdjsM8ZlbXzysLzxWkm8Ly1ew7Ga9RyjWHNkLQIAMHNWGkfjGM1aNHAAAPwL9JfY5sh/qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2ER/ASvWblkfHXzUAAAAAElFTkSuQmCC
[image3]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAA1CAYAAAD8i7czAAAD+klEQVR4Xu3dS6iuYxQA4M81SZKSEh0RE1IYYOA2UBIJE+USMjAUJdeUkiShpAw45VoGBnIpMTCkJAYmLuVSlFu5RO7fst/37LXX/+6zN/Y+53R6nlrtd631ft+/zxmt/u+ypwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg0509x82rxK7urjk+mOPR2tggf5X8vZIDAOwQMZREvDaIf+vGaXHI2Qy/TEuf89gcV8zxa8tPz5v+p32nxX9LzQEAdogYQr6pxf8oznV/LW6wrdN4cOqD50Z5fY7fahEAYGeIIef6Whz4co4HBrXD53iqreNcX7V1eCitu8gfbOuX53hzjuOmxWErelH7ttSj9nSphaj/WWp7TUtDV/ReLL0Qw2Uf9O4tvajdk/L4vW9t69tbHr6flvZe3fIs/l+j1we/OOaA5TYAwNpOnRYHpdWM9uXaDSUPo0Em7+nD0udzXNJqd7bapWVP1/NjUm2k79s/5c8vt//J72jr/Vp+5Lbuys/cp+T93HH/XHi45eds27GUxwC5xxyntTyfAwBgXX6YlgeJHOflTbPHWz07qtTqQHJEycMTpVb7e7baoal2WKtl+Xd9o/RCPITwe6nFt339PHHO41MvRO+Qknevlnz0uVHbktaPpF6vbfblYgBgNxRDxMm1ONCHo+yTOT5NefTfSfnHrZbl88Q3X6P+H3P8mOLnVh+5YBr/bjUfuWxaPrae47aS136s9075Ra3WjT5/VAMAWNN6h4jYFwNarV1T8gtLXs8f+WdtfXfLs35MjffzpiIGp9F5tieegI09cS/d5S3yMT9NS/fWddF7q63jsmc9/7tzfNfWx06L/TCqAQBsV9yQv94hIvbFINLVy6EnljxE/sygdnRa35R6vbY9q/VrvebZQdNiv17yjfWBq+TxCpFXUi9E/6S2jsux9fwnDGoAAGt6aVr/EBH7tpQ8H/vhHF+kPER/a8rjUmcdiqqoxbvVsrgs2kX/rJSHr1s9q3ns6ZdrX5hW9p9t+XUtv6XlXc1jnS+H9lp3ZclD5G+XGgDAmmKIiBfdrkfsHUX33KBW98a9aE+WfhVPftbjsv5Ua454IKCKpzfznvtWtlf04pux+Bkvys29rh5ff6eDB7V8/nhSNH7GN3sAAJsqbqw/sxaT+IsD55baGXOcX2priVdoxCs98isyquhfXIvFKXNcOy1+GxbicvBVtbjB4v6+/pcX6kAHAMBOFPe4ZfGwRlySBQBgF5Evh0Z8tLINAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALuvvwFCYThO0jANNQAAAABJRU5ErkJggg==
[image4]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAA1CAYAAAD8i7czAAADw0lEQVR4Xu3cScivYxQA8IeQKbFQSslso0yxM21kQRaIBRbGrESZFvZSwkrsrJSUaWFYsHLvQkgKCykZIkokItN7+j9P//M/3/t93736Bun3q9N9zjnvc//vvavTO7UGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsGseqIUu6sfV4n/MwW39899Kz05xUC0CAOyEGHj+LrUYTKJ2dqlvt/Pa2nPZzBtt//f8GzvxGwAAs15vq8PIlz0/JNV2yg9TvFuLm4hzvasWAQD+T2LgeaGvb+75ncv2imOn+Kstjvml9I6Y4pspDm+LfsRzK0csPNOW/QNTPfZG7ce+zh7tvYhjSi9qB5RadU9b7n+69MKhbdk/fYrrp/gq9e9ua8/porbcc03pAQBsmXHrMwaeN/t6PR+21f5vJd/T8xjIwhc9H27p+Y09n7uVWfOzeu2hnj/S86zmVfTf7+trez4G1Fw7py0GyFhHXJmOiTx+O+e/9vUJPf922QYA2DqvteXwEX+esdpecWbJ72irw1KsL035ab021P0h98ewlMWeems2HxMvG9Q9Wfy7Pii1GP7GnivSehhD4lCf8Yv1fSkftfr3AABsiTFo7J3ip77eyGdtuSdiXE27rOdZDEq19lav5RhemuLPlA/Pt/X3xPrllGf3trW/H+5vy3r9+8L3pVavBNbjAQC2VQwff/T10T2fE7dMo/fJFLdNcUPPT+r9t3ue1WEo1j9P8XBb7h8D3+g/lvJRi/N7vC32xPNtn5f+uSnPfm9rzynE0Pl1X0f/ydQbtXreI78krQEAdkQMH/HsVs7nBpKoHZnym3ptmNsX+bj6Feu4spXNHZ/F7cxXSy2OGUPiyNczd07Hl1qsL0z5qMVLDjl/p69f7DkAwI6Yu2V4WK/FbcBhvGE55Afzh1jPDWTjLdA6GL3Xa9lcPl42CPHh2nzM+SWv4i3W2o/845Lntz8/7bUs8qP6+taeZ5GfXGoAAFsiBo1XarEt6nUoiduSoz6e8RrHjM94ZE+UWrylOfZEjE9iZPV3n0q1iLj1mftxezT3R3y3wTHx6ZHso9SLiP+P/Bzdg72e1d87caULALCL4jMXc2967quL2+pbpNUpU1xVahdMcXmp7a/4zY2+kxbflruur2MAiyuKm7m6LW4LAwCwjW4v+alt7dU0AAB20XgmLgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsI/+AX0VGEo2cVlSAAAAAElFTkSuQmCC
