#!/bin/bash
lowercase(){
    echo "$1" | sed "y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/"
}

OS=`lowercase \`uname\``


# Build react production app
react-scripts build;

# Generate icons
npm run icons;

# Create precache service worker
if [ -f "build/service-worker.js" ]; then
  rm build/service-worker.js
fi

sw-precache --root="build/" --static-file-globs="build/**/!(*map)";


# Copy files to server
if [ -d "../server/public/static/" ]; then
  rm -r ../server/public/static/;
fi

cp -rf build/* ../server/public/;
cp -f ../server/public/index.html ../server/src/server/views/index.hbs;



if [[ "$OS" == "darwin" && -f ../server/src/server/views/index.hbs ]]; then
  sed -i '.bak' 's/<div id="root"><\/div>/<div id="root"><\/div><script>window.app=window.app||{};window.app.domain="{{{domain}}}";<\/script><\/body><\/html>/g' ../server/src/server/views/index.hbs;
elif [[ "$OS" == "linux" && -f ../server/src/server/views/index.hbs ]]; then
echo $OS
  sed -i -e 's/<div id="root"><\/div>/<div id="root"><\/div><script>window.app=window.app||{};window.app.domain="{{{domain}}}";<\/script><\/body><\/html>/g' ../server/src/server/views/index.hbs;
fi

if [ -f "rm ../server/src/server/views/index.hbs.bak" ]; then
  rm ../server/src/server/views/index.hbs.bak
fi

echo "Files transferd to server directory";