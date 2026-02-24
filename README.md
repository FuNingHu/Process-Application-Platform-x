# Process Application Platform (PAP)

A welding solution URCap for Universal Robots with Angular frontend and Docker backend.
The URCap is built via SDK v0.20.19 and is tested on URSim v10.13

## Features

- **Weld Path**: Plan and edit welding trajectories
- **Weld Parameters**: Configure welding process parameters
- **Process Platform**: Manage welding processes
- **Equipment Configuration**: Button mapping, torch type, and orientation
- **Weld Setup**: Task configuration and management

## Project Structure

```
pap/
├── pap-frontend/          # Angular frontend
├── pap-backend/           # Docker backend
├── manifest.yaml          # URCap manifest
└── package.json           # Project configuration
```

## Tech Stack

**Frontend**: Angular, @universal-robots/ui-angular-components, SCSS, ngx-translate  
**Backend**: Docker

## Prerequisites

- Node.js v24+
- npm or yarn
- Docker
- URSim or UR robot
- Angular/cli v21.0.5

## Installation

```bash
npm install
```

## Build & Deploy

### Build

```bash
npm run build
```

### Deploy to URSim

**Important**: Ensure your URSim is started with the `--dev` option.

```bash
npm run install-urcap -- --port <your_ursim_port>
```

With custom port:

```bash
npm run install-urcap -- --port <port_number>
```

### Deploy to Robot

```bash
npm run install-urcap -- --host <robot_ip>
```

Example:

```bash
npm run install-urcap -- --host 192.168.1.100
```

## Development Workflow

1. Modify code in `pap-frontend/src`
2. Run `npm run build`
3. Run `npm run install-urcap`
4. Test in PolyScope X

## UI Components

Uses Universal Robots UI component library:

- `ur-tabs`, `ur-dropdown`, `ur-radio-group`, `ur-icon-button`

Documentation: https://ui.universal-robots.com/

## Troubleshooting

**Build fails?**
```bash
npm cache clean --force
rm -rf node_modules pap-frontend/node_modules
npm install
```

**Images not loading?**

Use URCap path constants:
```typescript
import { PATH } from '../../../../generated/contribution-constants';
imagePath = `${PATH}/assets/icons/image.png`;
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request

## Resources

- [Universal Robots Developer Portal](https://www.universal-robots.com/developer/)
- [PolyScope X Documentation](https://www.universal-robots.com/plus/)
- [UI Components Library](https://ui.universal-robots.com/)

## Author

**PAP Project Team** - [GitHub](https://github.com/FuNingHu)

## License

See [LICENSE](LICENSE) file for details.

---

**Note**: For learning and development purposes. Test thoroughly before production use.
