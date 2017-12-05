#!/bin/sh

# Copied and adapted from:
#    https://github.com/gopherjs/gopherjs.github.io/blob/master/playground/update.sh
#

set -e

tmp=$(mktemp -d "${TMPDIR:-/tmp}/gopherjs_godown.XXXXXXXXXX")
rm -rf /tmp/foo
tmp="/tmp/foo"
mkdir /tmp/foo

cleanup() {
    # rm -rf "$tmp"
    exit
}

trap cleanup EXIT SIGHUP SIGINT SIGTERM

go install github.com/gopherjs/gopherjs/...
go install honnef.co/go/js/dom
go install honnef.co/go/js/xhr
# go install github.com/flimzy/kivik

# Build godown itself.
gopherjs build -m

# The GOPATH workspace where the GopherJS project is.
gopherjsgopath=$(go list -f '{{.Root}}' github.com/gopherjs/gopherjs)

rm -rf pkg/

# Use an empty GOPATH workspace with just gopherjs,
# so that all the standard library packages get written to GOROOT/pkg.
export GOPATH="$tmp/gopath"
mkdir -p "$GOPATH"/src/github.com/gopherjs/gopherjs
cp -a "$gopherjsgopath"/src/github.com/gopherjs/gopherjs/* "$GOPATH"/src/github.com/gopherjs/gopherjs

gopherjs install -m github.com/gopherjs/gopherjs/js github.com/gopherjs/gopherjs/nosync

mkdir -p pkg/github.com/gopherjs/gopherjs
cp "$GOPATH"/pkg/*_js_min/github.com/gopherjs/gopherjs/js.a pkg/github.com/gopherjs/gopherjs/js.a
cp "$GOPATH"/pkg/*_js_min/github.com/gopherjs/gopherjs/nosync.a pkg/github.com/gopherjs/gopherjs/nosync.a
mkdir -p pkg/honnef.co/go/js
cp "$HOME"/go/pkg/*_js_min/honnef.co/go/js/dom.a pkg/honnef.co/go/js/dom.a
cp "$HOME"/go/pkg/*_js_min/honnef.co/go/js/xhr.a pkg/honnef.co/go/js/xhr.a
cp "$HOME"/go/pkg/*_js_min/honnef.co/go/js/util.a pkg/honnef.co/go/js/util.a
# cp "$HOME"/go/pkg/*_js_min/github.com/flimzy/kivik.a github.com/flimzy/kivik.a

# Make a copy of GOROOT that is user-writeable,
# use it to build and copy out standard library packages.
cp -a "$(go env GOROOT)" "$tmp/goroot"
cp -a "$(go env GOPATH)" "$tmp/goroot"
export GOROOT="$tmp/goroot"
gopherjs install -m \
         archive/tar \
         archive/zip \
         bufio \
         bytes \
         compress/bzip2 \
         compress/flate \
         compress/gzip \
         compress/lzw \
         compress/zlib \
         container/heap \
         container/list \
         container/ring \
         crypto/aes \
         crypto/cipher \
         crypto/des \
         crypto/dsa \
         crypto/ecdsa \
         crypto/elliptic \
         crypto/hmac \
         crypto/md5 \
         crypto/rand \
         crypto/rc4 \
         crypto/rsa \
         crypto/sha1 \
         crypto/sha256 \
         crypto/sha512 \
         crypto/subtle \
         database/sql/driver \
         debug/gosym \
         debug/pe \
         encoding/ascii85 \
         encoding/asn1 \
         encoding/base32 \
         encoding/base64 \
         encoding/binary \
         encoding/csv \
         encoding/gob \
         encoding/hex \
         encoding/json \
         encoding/pem \
         encoding/xml \
         errors \
         fmt \
         go/ast \
         go/doc \
         go/format \
         go/printer \
         go/token \
         hash/adler32 \
         hash/crc32 \
         hash/crc64 \
         hash/fnv \
         html \
         html/template \
         image \
         image/color \
         image/draw \
         image/gif \
         image/jpeg \
         image/png \
         index/suffixarray \
         io \
         io/ioutil \
         math \
         math/big \
         math/bits \
         math/cmplx \
         math/rand \
         mime \
         net/http/cookiejar \
         net/http/fcgi \
         net/http/httptest \
         net/http/httputil \
         net/mail \
         net/smtp \
         net/textproto \
         net/url \
         path \
         path/filepath \
         reflect \
         regexp \
         regexp/syntax \
         runtime/internal/sys \
         sort \
         strconv \
         strings \
         sync/atomic \
         testing \
         testing/iotest \
         testing/quick \
         text/scanner \
         text/tabwriter \
         text/template \
         text/template/parse \
         time \
         unicode \
         unicode/utf16 \
         unicode/utf8

cp -a "$GOROOT"/pkg/*_js_min/* pkg/
cp -a "$GOROOT"/pkg/*_amd64_js_min/* pkg/

# Rename all *.a files in pkg/ to *.a.js.
find pkg -name "*.a" -exec sh -c 'mv $0 $0.js' {} \;
