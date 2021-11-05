module.exports = {
    answer: [
        `#include <bits/stdc++.h>

        using namespace std;
        int main(){
            int h, m, s;
            char ch, aorp;
            
            cin >> h >> ch >> m >> ch >> s >> aorp >> ch;
            h = (aorp == 'A') ? (h==12 ? 0 : h) : (h==12 ? 12 : h+12);
                
            cout << setw(2) << setfill('0') << h << ":" 
                 << setw(2) << setfill('0') << m << ":" 
                 << setw(2) << setfill('0') << s << endl;
            
            return 0;
        }
        `,
        `#include <bits/stdc++.h>
        using namespace std;
        
        int main() {
          int num1, num2;
          int sum;
          cin>>num1>>num2;
          sum = num1+num2;
          cout<<sum;
          return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            
            unsigned long long int N, Sum = 0, i, Num;
            
            cin>>N;
            
            for (i = 1 ; i <= N ; i++)
                {
                cin>> Num;
                Sum += Num;
            }
            
            cout<<Sum<<endl;
               
            
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
            return 0;
        }`
    ]
}