#查询语句
   ```
SELECT * FROM sm_user WHERE user_no ='001576' ;
              ( 表名 )       (字段名)    (值)
```
#修改语句
```
update sm_user SET system_roles ='39' WHERE user_no='001575'
       (表名)       (修改字段查询条件)         (修改字段的值) 
```
#MY SQL 插入数据

###1.为所有列都插入值

    特点:列值同数,列值同序
    INSERT INTO users VALUES ('12302' ,'Haige','na','1998-07-06','1382222111')
    注意:非数值类型一定要用'括起来',数值类型不用
###2.为特定的列插入数据
    
    特点:指定顺序，列值对应
    INSERT INTO users(user_qq,user_mobile,user_name,user_birthday) VALUES ('12303','138999944','dehai','1996-02-04')
###3.一次性插入多条数据

    特点:在原来的基础上往后‘，’加多条数据
    INSERT INTO users (user_qq,user_mobile,user_name,user_birthday) VALUES (
        '12304','138999944','dehai','1996-02-04'
        ),
        (
            '12305','1786881045','hyaus','1997-08-06'
        ),
        (
            '12306','1786881044','tyangss','1998-01-06'
        )
    
