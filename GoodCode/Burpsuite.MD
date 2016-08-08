## burpsuite详细安装方法

burp suite需要安装Java环境才可以运行，JDK6官方下载地址:
http://www.java.net/download/jdk6/6u10/promoted/b32/binaries/jdk-6u10-rc2-bin-b32-windows-i586-p-12_sep_2008.exe

安装之后在我的电脑  属性  高级  环境变量  找到path  将path 里面的变量值添加 ;+安装路径
我的是 C:\Program Files\Java\jdk1.7.0_10\bin  到bin就可以了

下载 burpsite1.6.zip
http://pan.baidu.com/s/1o6yPa8U

放到c盘根目录之后解压  得到burpsuite1.6.jar
将burpsuite1.4.jar放到C盘根目录打开cmd
执行cd ..
来到c盘根目录

执行命令  java -jar  burpsuite1.6.jar  即可
  