# moda-dao

[![CircleCI](https://circleci.com/gh/modadao/moda-dao/tree/master.svg?style=svg&circle-token=)](<https://circleci.com/gh/modadao/moda-dao/tree/master>)

# Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Environment Variables

Environment variables can be defined in a .env file in the root directory of the project. These need to be prefixed with REACT*APP* in order for the project to use them.

e.g. 'REACT_APP_FOO=bar'

The following environment variables are required:

| Key               | Value                      |
| :---------------- | :------------------------- |
| REACT_APP_API_URL | e.g. http://localhost:5000 |

See [example.env](./example.env) for more examples.

If using a different port for the local development server, the proxy url needs to be updated in the package.json file.

## Running the server api

```bash
cd server
yarn install
yarn start
```

## Running the client app

```bash
cd client
yarn install
yarn start
```

### IPFS Notes
```bash
generating ED25519 keypair...done
peer identity: 12D3KooWAxC95ZJcFAY56W3yTWJW4oGSwmrKwyayAqUXZqc7pSLJ
initializing IPFS node at /home/lucascullen/snap/ipfs/common
to get started, enter:

	ipfs cat /ipfs/QmQPeNsJPyVWPFDVHb77w8G42Fvo15z4bG2X8D2GhfbSXc/readme

```