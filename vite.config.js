import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```
Click "Commit changes" ✓

---

### **Step 5: Deploy to Vercel (The Easy Part)**
1. Go to **vercel.com**
2. Click **"Sign up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access GitHub
4. Click **"Add New..."** → **"Project"**
5. Select your `ux-audit-tool` repository
6. Click **"Import"**
7. Vercel auto-detects everything
8. Click **"Deploy"**
9. **Wait 30 seconds** → You get a live URL! 🎉

---

### **Step 6: Get Your URL**
After deployment, Vercel shows you a URL like:
```
https://ux-audit-tool.vercel.app
