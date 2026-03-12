
package test;

import java.util.Scanner;


public class Test {

   
    public static void main(String[] args) {

    Scanner in= new Scanner (System.in);
     
        System.out.println("input tour number :");
    
    int ply1 = in.nextInt() ;

         System.out.println("input tour number :");
    
    int ply2 = in.nextInt() ;  
    
    
        if (ply1 == ply2) {
            System.out.println("you got it ");
        } else {
        
            System.out.println("wrong Answer!!");
        
        }
    
    }
}
