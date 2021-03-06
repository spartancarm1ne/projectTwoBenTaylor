var GAME_LEVELS = [
  ["  x   xxxxxxxxxxxxxxxxxxxxxxx      ",
   "  x   x                     x      ",
   "  x   x          @          x      ",
   "xxxxx x         xxx         x      ",
   " xxx  x                     x      ",
   "  x   x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      xxxxxxxxxxxoxxxxxxxxxxx      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x               o     x      ",
   "      x               x     x      ",
   "      x    o                x      ",
   "      x    x                x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x xxxxxxxxxxxxxxxxxxx x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x      x       x      x      ",
   "      x      x       x      x      ",
   "      x      x       x      x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      xxxxx             xxxxx      ",
   "      x!!!x             xmmmx      ",
   "      x!!!x             xmmmx      ",
   "      xxxxxxxxxxx xxxxxxxxxxx      ",
   "      x         x x         x      ",
   "      x         x x         x      ",
   "      xooooooooox xooooooooox      ",
   "      xooooooooox xooooooooox      ",
   "      xooooooooox xooooooooox      ",
   "      xooooooooox xooooooooox      ",
   "      xooooooooox xooooooooox      ",
   "      xooooooooox xooooooooox      ",
   "      xooooooooox xooooooooox      ",
   "      x                     x      ",
   "      x          o          x      ",
   "      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "                                   "], 
  ["      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "  x   x                     x      ",
   "  x   x          @          x      ",
   "  x   x         xxx         x      ",
   "xxxxx x                     x      ",
   " xxx  x                     x      ",
   "  x   x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x       !     !       x      ",
   "      x     x x  o  x x     x      ",
   "      x    x  x  o  x  x    x      ",
   "      x   x   x  o  x   x   x      ",
   "      x     ! x  o  x       x      ",
   "      x     v !     !       x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x       oxxxxxmmmmmmmmx      ",
   "      x       oxxxxxmxxxxxxxx      ",
   "      x       oxxxxxm       x      ",
   "      x       oxxxxxm  ooo  x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                    xx      ",
   "      xxxxxxxm!            ox      ",
   "      x!!!                 ox      ",
   "      xvvv                 ox      ",
   "      xvvv       xxxxx     ox      ",
   "      xvvv                 ox      ",
   "      xvvv                 ox      ",
   "      xvvv                 ox      ",
   "      xvvv                 ox      ",
   "      xvvv     xxxxxxxxxxxxxx      ",
   "      x!!!x !!!x           ox      ",
   "      xxxxx xxx             x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x    o    o    o      x      ",
   "      x    x    x    x=     x      ",
   "      x    x    x    x  =   x      ",
   "      xmmmmxxxxxxxxxxx    = x      ",
   "      xxxx                  x      ",
   "      x|                    x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x=|o   o   o    xxxxxxx      ",
   "      xxxxmmmxmmmx         mx      ",
   "      x                    mx      ",
   "      x                    mx      ",
   "      xo                   mx      ",
   "      xx           x       ox      ",
   "      x                    ox      ",
   "      x                    ox      ",
   "      x                    ox      ",
   "      x   xxxx              x      ",
   "      x                     x      ",
   "      x            xxxx     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x       o             x      ",
   "      x       x             x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x              o      x      ",
   "      x              x      x      ",
   "      x       o             x      ",
   "      x       x             x      ",
   "      x                     x      ",
   "      x!!!!     ooo     !!!!x      ",
   "      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "                                   "],
  ["      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "      xo mmmmmmmmmmmmmmmmm ox      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x          o          x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x=    =    =    =    =x      ",
   "      x   x x x x x x x x   x      ",
   "      x   xoxoxoxoxoxoxox   x      ",
   "      x   xxxxxxxxxxxxxxx   x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      xx                    x      ",
   "      x                    xx      ",
   "      x                    vx      ",
   "      x                     x      ",
   "      x       o             x      ",
   "      xo     =x=           ox      ",
   "      x       !      m      x      ",
   "      x       v     mxxxxxxxx      ",
   "      xm             mmmmmmmx      ",
   "      x                     x      ",
   "      xo     xo             x      ",
   "      xo     xo             x      ",
   "      xo     xo             x      ",
   "      xo     xo             x      ",
   "      xo     xo             x      ",
   "      x      xo     ox =    x      ",
   "  x   xm            ox  =   x      ",
   " xxx  x             ox   = ox      ",
   "xxxxx x             ox    = x      ",
   "  x   x             ox     =x      ",
   "  x   x  x                  x      ",
   "  x   x    =xo              x      ",
   "      x   = xo              x      ",
   "      xo =  xo              x      ",
   "      x =   xo          xxxxx      ",
   "      x=    xo          |   x      ",
   "      x                  |  x      ",
   "      x                   | x      ",
   "      x           @        |x      ",
   "      x!!!!!!!!xxxxxxx     =x      ",
   "      x                     x      ",
   "      x                     x      ",
   "  x   x               =ooooox      ",
   "  x   x                xxxxxx      ",
   "  x   xm                    x      ",
   "xxxxx xmo                  =x      ",
   " xxx  xmxxxx   o        =   x      ",
   "  x   xm    xxxx      =     x      ",
   "      xm        mmmmxommmmmmx      ",
   "      xm           oxo     ox      ",
   "      xm            xo      x      ",
   "      xm            xo      x      ",
   "      xm                    x      ",
   "      xm o o o o o o o o o! x      ",
   "      xm=                =! x      ",
   "      xm                  ! x      ",
   "      xm x x x x x x x x x! x      ",
   "      xm           |        x      ",
   "      xm             |      x      ",
   "      xm                x   x      ",
   "      xm         |          x      ",
   "      xm     o              x      ",
   "      xm                    x      ",
   "      xm          xxxxx  xxxx      ",
   "      xm                    x      ",
   "      xm                    x      ",
   "      x         xxxx       =x      ",
   "      xo   mmmmm    oooooooox      ",
   "      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "                                   "],
  ["      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "  x   x                     x      ",
   "  x   x @                   x      ",
   "  x   x xx                  x      ",
   "xxxxx x     o               x      ",
   " xxx  x      o              x      ",
   "  x   x       o             x      ",
   "      x        o            x      ",
   "      x        o            x      ",
   "      x        o            x      ",
   "      x        o            x      ",
   "      x       o             x      ",
   "      x      o              x      ",
   "      x       o             x      ",
   "      x        o            x      ",
   "      x     o               x      ",
   "      x     x  o o o o      x      ",
   "      x mmmmmmmx x x x o    x      ",
   "      x                 o  mx      ",
   "      x                  o mx      ",
   "      x                  o mx      ",
   "      x                  o mx      ",
   "      x                  o mx      ",
   "      x                  o mx      ",
   "      x                  o mx      ",
   "      x                 o  mx      ",
   "      x                o   mx      ",
   "      x                o   mx      ",
   "      x                o   mx      ",
   "      x                o   mx      ",
   "      x                 o  mx      ",
   "      x                o   mx      ",
   "      x ooooooooooooooo     x      ",
   "      xoxxxxxxxxxxxxxxxxx!!!x      ",
   "      x !!!!!!!!!!!!!!!!!!!!x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x o                   x      ",
   "      x xo=  =   =     =    x      ",
   "      x  xo                 x      ",
   "      x   xo                x      ",
   "      x    xo   =     = = = x      ",
   "      x     xo              x      ",
   "      x      xo             x      ",
   "      x       xo   = = =    x      ",
   "      x        x            x      ",
   "      x           o         x      ",
   "      x            o        x      ",
   "      x            o        x      ",
   "      x            o        x      ",
   "      x            o        x      ",
   "      x         xxxxxxx     x      ",
   "      x                    mx      ",
   "      x                    mx      ",
   "      x                    mx      ",
   "      x                    mx      ",
   "      x                    mx      ",
   "      x     o              mx      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x                     x      ",
   "      x             o       x      ",
   "      x                     x      ",
   "      x   xx                x      ",
   "      x                     x      ",
   "      x!!!!!!!!oooooommmmmmmx      ",
   "      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "                                   "],
  ["      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "      x                     x      ",
   "      x          @          x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x=                    x      ",
   "      x                    =x      ",
   "      x                     x      ",
   "      x          o          x      ",
   "      xxxxxxxxxxxxxxxxxxxxxxx      ",
   "                                   "],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
