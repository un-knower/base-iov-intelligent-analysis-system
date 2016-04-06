package report.lgd.service.impl;

import com.lgd.model.pojo.UserLoginInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import report.lgd.dao.UserLoginInformationDao;
import report.lgd.service.UserLoginInformationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by liguodong on 2016/3/29.
 */

@Service("userLoginInformationService")
public class UserLoginInformationServiceImpl implements UserLoginInformationService{


    @Autowired
    UserLoginInformationDao userLoginInformationDao;

    public void setUserLoginInformationDao(UserLoginInformationDao userLoginInformationDao) {
        this.userLoginInformationDao = userLoginInformationDao;
    }

    @Override
    public boolean hasUserAndPasswd(String username, String password) {
        Map map = new HashMap();
        map.put("username",username);
        map.put("password", password);
        int numPass = userLoginInformationDao.hasUserAndPasswd(map);

        return numPass>0?true:false;
    }

    @Override
    public List<UserLoginInformation> queryBaseInfo(String username,String password) {

        Map map = new HashMap();
        map.put("username",username);
        map.put("password", password);

        return userLoginInformationDao.queryBaseInfo(map);
    }


    @Override
    public List<UserLoginInformation> testQuery() {
        return userLoginInformationDao.testQuery();
    }

}
