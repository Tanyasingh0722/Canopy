const fs = require('fs');
let content = fs.readFileSync('src/app/components/Profile.tsx', 'utf8');

content = content.replace(
  '<Area\n                  id="area-saved"',
  '<Area\n                  key="area-saved"\n                  id="area-saved"'
);

content = content.replace(
  '<Area\r\n                  id="area-saved"',
  '<Area\n                  key="area-saved"\n                  id="area-saved"'
);

content = content.replace(
  '<Area\n                  id="area-spent"',
  '<Area\n                  key="area-spent"\n                  id="area-spent"'
);

content = content.replace(
  '<Area\r\n                  id="area-spent"',
  '<Area\n                  key="area-spent"\n                  id="area-spent"'
);

fs.writeFileSync('src/app/components/Profile.tsx', content);
