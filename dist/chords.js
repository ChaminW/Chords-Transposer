function transposition(n,r,s){var o=0,e='<span class="chords-highlighted">',l="</span>",a=[];return n.forEach(function(n,t){var c=n;console.log(c),console.log("%d: %s",t,n),n=n.replace(/m?(sus|add|maj)?[0-9]?( *(-|\/))? *$/,""),console.log(n),a=_chords.indexOf(n)<0?_chordsFlat:_chords;var h=a.indexOf(n);if(s<0)if(h+s<0)var i=a[(a.length+h+s)%a.length];else var i=a[(h+s)%a.length];else var i=a[(h+s)%a.length];console.log(n),console.log(i);var g=i.length-n.length;console.log(g),r=r.slice(0,t+o)+e+i+r.slice(t+o+n.length,t+o+c.length)+l+r.slice(t+o+c.length),console.log(r),o+=e.length+l.length+g}),r}function array2string(n){var r="";return n.forEach(function(n,s){r+=n+"\n"}),r}function findChords(n){var r,s,o=/^ *[A-Ga-g](#|b|&)?m?(sus|add|maj)?[0-9]?( *(-|\/) *[A-G](#|b)?)?( +[A-Ga-g](#|b|&)?m?(sus|add|maj)?[0-9]?( *(-|\/) *[A-G](#|b|&)?)? *)* *$/,e=/[A-Ga-g](#|b|&)?m?(sus|add|maj)?[0-9]?( *(-|\/) *[A-G](#|b|&)?)? *$/;return String(n).match(o)?(r=n.search(e),s=findChords(n.substr(0,r-1)),s[r]=n.substr(r).trim(),s):[]}function replaceWithTags(n,r){var s=0,o='<span class="chords-highlighted">',e="</span>";return n.forEach(function(n,l){console.log("%d: %s",l,n),r=r.slice(0,l+s)+o+r.slice(l+s,l+s+n.length)+e+r.slice(l+s+n.length),s+=o.length+e.length}),r}var chords=function(){},_chords=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],_chordsFlat=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];chords.parse=function(n){for(var r=n.value.split(/\r\n|\r|\n/g),s=0;s<r.length;s++)r[s]=replaceWithTags(findChords(r[s]),r[s]);return array2string(r)},chords.shiftScale=function(n,r,s){for(var o=_chords.indexOf(r),e=_chords.indexOf(s),l=e-o,a=n.value.split(/\r\n|\r|\n/g),t=0;t<a.length;t++)a[t]=transposition(findChords(a[t]),a[t],l);return array2string(a)};