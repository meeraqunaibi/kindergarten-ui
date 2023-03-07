import PersonalInfo from '../personal-info/personal-info.component';
import './student-info.css';
const StudentInformation = () => {
  return (
    <div >
      <div className="box-info">
        <div className='student-introduction'>
          <img className='student-img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAEOCAMAAADmPpYqAAAB3VBMVEX////7w6K4OkUCMEgREiRWNisAIzkEOlQCTWwAAAAADSHAPEd9IikAIDUAAAw6IxOwtrnPo4gAByr6vVwALEuwusIAITkAABj/zKn/yKYGCB77rz4BR2RZNyr99/MAABv/uED5vZrs2M0AABEAJUi1LDkAIT4AHkgAABQALUcAGzJSMCRDIxobAAAAJ0EADjQAI0ePlp/cqo8AAC8AGTkADCjGzNBbaHTy8vRBFADtuJrn4uBPKx0oEwAoDwAxGggUAADGanDgtLhlZm5HR1RbWEergELuq0H9yov70JgBGCn8rC4pAABCGAA4LTBONCwxLDMkKDW0iXH607z76uD70rmyGiqYLTXx3+BvABWkpak9Pkh2hZA8WGvCy89acYCDkpouTWIbOkU7SUh0Y0WMb0iwiEXPl0SPZy3epUTEkkRkXkVPUEgABTyuhUWadkW7taaBel/uumxycnX82az948IiNkfKwb+Gcmn81qgxHR9pTUSciYGuoZ76mi72rFPjoG7pfSHnhjjafzjmlhzEgDDDghPGbwbSo2XatoXilTbDhyBrSTmIYVC5jXXDgADOiUvAZQA4EQm7nZ2zhoXlw8XXoaJwAADmp4/OeoC6dGePPzy+Vl2rYlnSkJO4STrmAAATYElEQVR4nO2cjXsSx9rGISTEtUKIVb5iQgkmDYFEQU0TUIjunloTo0IwKuSop19W3/e0fcU0empPba1N1RBPPcePWE//1veZWfZ7F2ZhFjZXe5teBXaW/c3NM888M0vicFio2f2r/X8tz1h5CWt09Xr/kaPTrvj40SM7in8m9TfgjrvqAv5DO4I/67t26NB4XAQX+Q8d+sDO/BDg04fGp10Gmgb+a+Vstyl1dDXVLw8UY/6j13x24p8p//XI0fFm3Pbjn91/7SgECim4xD++6pvtJvjV6y6UCVtSfHr8SHx1f1f4cSYcb41b4j96xNVh/qzvg0PkAd5EwN9/vTP8TTJhK4p3hJ8sE7YmKB/+lrpqDbe5TAjqRzKFH7eCn8+EZvzul2QKnzL//uvxI2YzeL9C5uhdlMrPFjNhf3vsdf42ys96TWjuivH4vn0HD1JgR0Llm3l+yITjZJmQhz148PDh998/HP/4k798+tlXn+9VovtbhXfVyx9y/oaZEDuLaIH1/YN12A8/v3Xj5umh9wR9cUgWNu5wG+j4koTlG58Jlazxad5ZBOviYb+UwQrI9Wenb964dWsystvtQr2fnoyEqcwHwH/42n5D/npNuA8Zu68eBQKs2llRmPXzD7/66tP/+d9PPo6jDh6Gs9y7I5FwIAyapEEu8o/r8EOAHzzy979LMfulPiyP+uWHX3326V8++dh18H3EevAg6u2+uHKt5/ZMTrrd9MgF/iP75OVb6ev/++IL3lktKm/rZ8hW177DPCoIkVpTHJDw73Vh8LXbi4uLSls/F20VWbGtXUJVa9rt8Uxi9o8WT9/8Atv6sdxW3le74IqKAzdSnX1o6AbjPTbZvRAglts9yYPvjX0jY/cyTGyB+sCiKcHwY5HIB8JSt86OxDALHtuZj2cJTx18r/eblGyOPbM4dLPKgOr8XpvZH5cMD3yg2lsA9nfRfFqR8G1jv8CNDHeltEXNmSHEjqYnn2Q/0337426/ToQrdW+xzs6XMxdsYb/c8G90DK/rjpxdZb+3K8lnurnhBuzY/pTc/t2ezk1S05LhMb0Ib87u6Er0k0Q4Ebue/S6XRf7HFYY3inCl1ozZ9ey3AD4ucZMaTsSutT/moUsuzJm4SiE1nJjdgexnLYh+3nB/C4abYUfC9nsl+9uIHnSqmMIRulnDzbI7HPv3Luz2Svit2y9mFCy3a9/+VshNsfv2uqGEXhDxsf14P4D0M0BrhPi05PekG2+idYod5Gnd/mm5467+XbsO9LfBXjLPDvJ7FryK6J9u7v20PMLd/Qd2IXWBvW6/GD2o7m+UPOURPumJ9+8S1CV2pIWFmCr61dAuqbhSGN59dhQ+CxOyqUsT/bJA8cgNp8E+0i47KO7yKKJf4NeNcJux411f9wIj419QpHAdw23FjnbaJfth0SXmcF3DabA7aMSM7EaBYP9CE8Ptwq68wbSr3xVDi93GhtuUHSHBXN8c3H7sRMy2YXf3a4zvDPtQ++z+HczucbUM33V297SS3UTEt8d+mgK7p79FeIzeOvu7FNjls5MZ+Hrr7rKrjSeKebFtd9nVEU9g/YF+u7CrU00T+gOKhi2z36bCrguvj3/ggLpVt9n9fl143AEkxHxAi4017muR/aNFKuxAbwjfRK69Mvb19W6wtwjv8ntk7NmzZnYl6bG7Pdps01TTfrdbYs8uHTeB7jhDj93vMWm9a9qDzhPZ1+eO3+0SO7LeTU7vQp7L2LN3l/qOmwl3yuzE3qObBsI5iH12/e5coq9vztQm/D267Nj86Sb49VgR+/uPpaW540Del/jWDLrjDn12oPe44/r8aIvP7/b4Fc3PDffxMhcyJtiv7vV7DFiNOuCOi7vzcRcKKO0bwCt+kX3JFLoJ9vuJcwW/XwfSWH6ezoNO0z/T775wrk+0/Ttz7Guk7OtzfcPDfecKbpP8xv3y+wvnzg8L4H19w6aSO+jeP78na7hUv8DweQr8cH7hgpwbac7krw49+OH729+PEDS8f1zyB/l/oeA2DISG0CAP9lsJDsFuMmJGf/jxxx9/cDZvmJ1TXmgYfwCoA8QfAaIGt/Wwsev3zaE7ShsPAT7TvOG3CZ3LoU8AegBdKKDxCGh+t9gZ9MxTNxqeAvS58/gEvTdSp0ei6Pnx4cOHG82bqW3XdmG47zz0AvpxAXpS14UL6JXz58/zDQyoeSXuSlPq7Lck4TPy09CjoZ9LTdvd1bVdpxN8P+QiOhHBL33H02fvzxGF/vJPpx8NPXncrFlj22np+Ny3d+/f7Zs7Tpbo00PAfvpGs2ayJGOtErisIasNAPzRk+ZBs9QhdEFLBGN1ZGPo5o0nQ0/vNG623mn2OQLblzfee/rLw/eeNAkawpFKTQmS1dODJ+89ffxw6PSzxjMrme0JJL0Dw/X/iLVEEu4bwH5n4/S7T5cbtco2Yk8kkqDhxGatViwWa7XhZFLRAXQYEmeyDzVL6ndO01kC9NKv3wM2DNZfbjVq9p1hlkkkE7WtwYwzCAphBYPOwZpEn0gUBzNBrJAzkx7cgr41xZ8jsX154/btp2uPfll83DBo9OsBRF5MI2SnSiFnMcm3SG6pDkPnMlu1xvhkewUPHrx75ue1fz1evPdsrUEz/YkpkdjSYguIaQSf2MzoNYCziomkIXoiQYLu2Li4eOfnNejBR7d+MW6lH+7JmtOIXIDfNGwQChUNvSfbKij9urx459la+l9nhtaeGTdb1wv3RLoBOaIrJpOZRsedNX3rCRcgFzdKi2vP1jKP1hZLDYJGpyBIbDYERwomi417F9zSgyeZUZEePMDQyxsji2s3jINGO1TPG0eDZGytaYu0TtjMkazhQBvLdxZHnpWWf3Us3nv8s2Ezje0k6E5no4gRmmjhSTfGRhxrHwH76K8j99Ycxv3VrPb6CMjJlNGEjdn1duOPSZNmGo5Bc+JzaTvsjaUuImG+ocaO0pHy3UnHKiG7Kt5rQXrokG02rWRXVTMUIwZLFfJWsieaZG3TChUVyYZuvCunpiRdcqSkdeyKRRN129XGW8huge1K483dtDHDnqhRtx1VD7IrkNYE5tmTafroztCgzHiSHYLW2Puo5nYRXpYNTN61IWe3YKRidlnQmL31QcxuScgA+5Z0CZItgpbYE5aEjHxuNXmDlZzdkiyDFJTcMfV9AjPsNCtIuaSAT5i9cdNY90V2i8JdPrWavcPaRFItdtyicIcMbzn7plXsTnH5ZPILBc0krj0syu5IYqIh2gFuhV0zVPHuqRlGo/YhkZ3uX8UU16vJQTXIYLFY3EoHCfEbtA8K8U63nJH2CZSrvVCmNpUDnZjKF3W3TNV46drZ3AkQtNfsZIoJnm5J4JgV9mcUtXuoNp8HjMRALpfPzzffA8tsTuXzU7lEIof+v6Ua9cFhS6ZV6Y5NUu7W8Ik8+I1uCaRrQJ9TxZMavTifzw3g9uD/VH5KtdkgsB+nOzU5HHrVzAC6fL0vISeQMY3CJrTF5PNbYvvMZi6nhBfZ6aZ3qSiQ2IObyo8daJqUOsM1eYIJ1nI5RcIV8gzl9C5tFIjsoWJuSpUvm6VK1fFgLT+vKDCSlqRIaWKV4p050e7mWGjgRJ+sO8LcRHfV5JAmJ5E9tDncHjkoDZlS9ixpTZoRE7zku7nJVF/yGUpYbVNPM+IGfNKyckZY9FEfqg5HQmduoster9+pD1UxSeqxm6/FGrJTRxcSjYY9GkoXa9rixJg8A80zzqj2AL/moz9UxUSjZg+Wvobp8sTUIGkduTWfz+eZ0ZKmff0GAvVZ1SEmGtVdgxAc+S43MDAwT3Y3IZSeh8Zn0XDUsPMlAeWFBy9ddvQ9rdkpwMmTTVRQSEDjKfR+o+pDCSuKd1783WEVO/rKTfbsAOIhC5op3BalkovqQzi9U96bqYsfrCr26Ohs9vkA5iEKmjRmzw9kZ0ejqkN8SWBBdncIg1W1PRMq5h3rZ82yn806GM26F5cEwxZkSIewdFJvLaXz/FgdyJEVZjz7+oi2q7gksKAgwOrTYw8OzGPb82TblKFaHsPPD2u6iksCCyZVLFzCq9n5pDeQzxG5DjMTNn5gXrMziKdVKyYmrPWlpM52ZGhwKgfLUNKbxaF0Pncil9NOZYg9ufS1NejLUVSlJjVXDTm3ioMmViGhwaLeVjKUBPi9qd4mqwulY5g+1HtL/HVN1mK6r27W15P00UtRJy45Eo33MVpXcDjBb9M2/IZpS8KzIHyu1rEn6ndUotTZo070BaoisFu1cEomiqEMDPlo81+AMCcImcxgBpZliS2L0DNJtMU8mKYfNMCO3jadtIw9nUTpFwyygB29KzbHGnTIv7jMA4cu0mbHjjiDz59bdJsvtPX8eZBnt8J3NKNmKH/ZSib81hkL2Ecg3q3KjooODKap5xlYXXaCPTQ4mIlSrwqW60FjrdA1QrTRUdCkB60L9rrgs6UfMmA874qV4t+fPjreT2ktPZrqsBW246hpTWZCLTpqBTrAO6OgFtiJjL+I390S17FKoyWH6bgJESVXoEbvbq00e0LNlCFjtxgbiyjs8YeD13aZ9CBRzNBfLelJs4+oJyCWRNCe/mSqK7xybaqMSE+WIjuCrt04N+bPpNNk+dHC/KKU6dFKwN4hdH7dTRfdohlJR8vU2TuGTt34aGcSJC/KxnfSdhOphgi9U0mGF1mOJ1VH0U0an4FMnzHcYeiw7cZVTegiQL5Ov07rSf8U2ltJzbVsAM/3bKRUKo1iLddlOMV2dqDyMooPg+ajBrZ3PGKQjKJGH37UwPaOpnYZjgF8WqdtyShigh3H5mVQyEfTmlrcyPVOle06Mlq6ppWl1UjaEL0bwV6XAbsznR4VDS0t2xLdeO0KGTG9jDIkemC0/uhg5WsKHq+ZeBnOp91JMSTwfAeMj3UdHW2Wtaauxrqg1uBtgQ66GDXP3rW8rpbZjYNo50tHY43ofM20AbpN4kWQUUlsc9N5jZBFfTRkM9N5lZrT25QcCbxvgB+NXrQtOVYpaEAfDY7aJi8aalSvgMloa3o7ahTvuaczoviN+J3DLlcaf5FqB7IL8bPj2GW7GjuMXbEfs6PYVTtJO4ldnSd3ELsmxe8cdu3stGPYdSbWncKu98v+O4VdS75j2KM7mF0P3fbs2Rf/fmlUvsNi/OJ//v2C6t9ro6TZFy9Pvnp15coVA3Kk16+uvHp1afvUCxt9BJdPbfesjI29swfpjeEv3AR/Q8cvjY2NrfT8/uJyt6kR98mxlbEerEuI7cprgxsKoTdX0HG+KeLf7qb/Iy+2RW4sbPweA/TXGP2S1Jr3vxvgl1++hTjpUQgbv+c3XfQMRt+jPAHxnzzVWfsvv+xZUXHLjN+jnVeDvOty2yX+lbenOpV+jMAl+CtvlH+QKOT8rzG6gN8B8hdvDcHFqNlzZc+bKP4L/Oiv1Adf86NUGzFK/G1rY//y743AZfCA/9ubN69Bb/67RyBvhI600vPSMvIXJ5uRy+ERP0j2tOm5YP7vluR9CJbmF0faoy+jWFfTn6RO/6KnueWCLumiv0N6OmX6yybIkVo0XaTfppbyR04SRotMcu8vmSPvwXFPB/2lefI6P1Zr546NUciYl9+aCxdqWtluF/1Uq6a3r7Ge9sbsdvfQQSvtFArdihcRvuUhO2IyM1qgsVaDvvvoLcN3O2B4jbUSNtu2QIeYN5/ou5gcVVoxu6gasQ16T89bk+x2iRgkk1Fz2Ua2g0yx/24j280abyv0nh4zSf6yzdjHTLC/tBn7iomKcrvbsCqNmSgoT3YbVqU/2bujPwz7O/aSITujVWC3zaTDiOTo3bn6k707+uOxh8OUMVqSwB5ANDHh1QnxeBjlnYhXOiEWgMZcxQ7wdfbAKhfu9ZaZGDAFYkwKoAEyHJ4oZLNZtupjegNeOBTxMuXUhLdSZe0AL/geK8fCHMuVuQBTLbMpH1MprzJcpeqrMhMsm11lqj4u4GV9bDnFlDmOLbR74XCDZ6oDYfwTCatbSezeiXIBuI6lOKY3FSmUgZ71MayjXGCqM4XUDDfLVbMsW67OpJhCm+jhCvxDSGEMFC5wAfwgUiiE66x4SBUClUBlgoMgjRRYzsvFegvQWLi4wB5hWSZVrlTYasrbG0sdK0d6mTLLQdCUHSnowywDps/0TjBlR5lpDxw0UWZSDOft5TjOy8YKBR+LH8RYlqv0xrhCL+ctcIWCN1Utc74KcKVSkVUW4oGZ4eAnrGTHpD6OZXvL3t4JYA9A+CN2L8y9AnsWsZdnjT9hUsHwqpbLqTJXZVNcyleopvCDFFed4byrbMXHVmdW4SnHlJnV3vIMB5Gaqq6WgQ/9qNljZYiSFHOskAI/WJaPGc6bAtN9hVkuNcPWY+Y6N9u+8UyWSVUK4FUVITPVFP+AW62uFlJgIguGc6spb8HHlCfgAAsvQlcBpgo/ARV7uFINBLhyuZdZLbPMqrcCXYVUWEnBaA2wVXGsothi2zY+XAhPwLtwsQqKmXClEkMxMwEpoFLx4pipFAoFLlJhe+HfhJeLRNhAhPVC8g6IbyLNTWF4MTyBDsYi0CAcm8CDZsILr0cCQo6MwHCfoJAfxSHJZ5L6g7D8QH3EKg/I9cerCeyhP9m7o53M/v8/NgcSwVr2jwAAAABJRU5ErkJggg==' alt="" />
          <div className='information'>
            <span className='student-name'>خالد أحمد</span>
            <span className='student-class'> صف الفراشات </span>
          </div>
        </div>
        <PersonalInfo/>
      </div>
    </div>
  )
}
export default StudentInformation;