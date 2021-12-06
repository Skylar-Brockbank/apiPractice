using System;

namespace Chess
{
    class Queen
    {
      public bool Attackable(int qx, int qy, int px, int py)
      {
        if(this.CheckPlus(qx,qy,px,py)||this.CheckXCross(qx,qy,px,py)){
          return true;
        }
        return false;
      }
      public bool CheckPlus(int qx, int qy, int px, int py)
      {
        if(qx==px||qy==py){
          return true;
        }
        return false;
      }
      public bool CheckXCross(int qx, int qy, int px, int py)
      {
        if(this.DownLeft(qx,qy,px,py) || this.DownRight(qx,qy,px,py) || this.UpLeft(qx,qy,px,py) || this.UpRight(qx,qy,px,py)){
          return true;
        }else{
          return false;
        }
      }
      public bool DownLeft(int qx, int qy, int px, int py)
      {
        if(qx < qy){
          for(int i = qx; i >= 0; i--){
            if(px == qx - i && py == qy - i){
              return true;
            }
          }
        }
        if(qx >= qy){
          for(int i = qy; i >= 0; i--){
            if(px == qx - i && py == qy - i){
              return true;
            }
          }
        }
        return false;
      }
      public bool UpLeft(int qx, int qy, int px, int py)
      {
        if(7-qx < 7-qy){
          for(int i=qx; i>=0; i--){
            if(px == qx-i && py == qy+i){
              return true;
            }
          }
        } 
        if(7-qx >= 7-qy){
          for(int i=qy; i>=0; i--){
            if( px == qx-i && py==qy+i){
              return true;
            }
          }
        }
        return false;
      }
      public bool DownRight(int qx, int qy, int px, int py)
      {
        if(7-qx < qy){
          for(int i = qx; i >=0; i--){
            if(px == qx+i && py == qy-i){
              return true;
            }
          }
        } 
        if(7-qx >= qy){
          for(int i=qy; i >=0; i--){
            if(px == qx+i && py == qy-i){
              return true;
            }
          }
        }
        return false;
      }
      public bool UpRight(int qx, int qy, int px, int py)
      {
        if(7-qx < 7-qy){
          for(int i=qx; i>=0; i--){
            if( px == qx +i && py == qy + i){
              return true;
            }
          }
        }
        if(7-qx >= 7-qy){
          for(int i = qy; i >=0; i--){
            if(px == qx+i && py == qy+i){
              return true;
            }
          }
        }
        return false;
      }
    }
}
