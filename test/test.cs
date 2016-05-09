using System;

namespace test{
    public class testClass
    {
        public int Id{get;set;}
        public string Name{get;set;}
        public int Age{get;set}
        
        public overwrite string ToString(){
            return string.Format("Hello! My name is {0}, I'm {1} years old.",this.Name,this.Age.toString());
        }
    }
    
}